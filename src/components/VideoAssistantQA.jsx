import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

// Lightweight markdown-to-HTML converter for AI responses
const renderMarkdown = (text) => {
  if (!text) return '';
  let html = text
    // Bold: **text**
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic: *text*
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    // Inline code: `code`
    .replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;font-size:0.85em">$1</code>')
    // Newlines -> <br>
    .replace(/\n/g, '<br/>');

  // Convert bullet lines: "- item" or "• item"
  html = html.replace(/(<br\/>)?([-•])\s+(.+?)(?=<br\/>|$)/g, (_, __, ___, content) => {
    return `<li style="margin-left:16px;margin-bottom:4px;list-style:disc">${content}</li>`;
  });
  // Wrap consecutive <li> in <ul>
  html = html.replace(/(<li[^>]*>.*?<\/li>)+/g, (match) => {
    return `<ul style="padding-left:8px;margin:8px 0">${match}</ul>`;
  });

  return html;
};

const VideoAssistantQA = ({ videoContext }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: `Hi! I'm your LLaMA AI assistant. Need help understanding the video "${videoContext?.title}"? Ask me anything!` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  // Reset chat if the video changes
  useEffect(() => {
    setMessages([
      { role: 'assistant', text: `Hi! I'm your LLaMA AI assistant. Need help understanding the video "${videoContext?.title}"? Ask me anything!` }
    ]);
  }, [videoContext?.id]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    try {
      const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY; // Requires setting up .env
      
      if (!GROQ_API_KEY) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          text: "I am ready, but I need a Groq API Key! Please ask the user to provide their VITE_GROQ_API_KEY in the `.env` file so I can connect to my LLaMA brain." 
        }]);
        return;
      }

      const systemPrompt = `You are a helpful and concise AI teaching assistant for PokeLearn, a data science learning app. 
The user is currently watching a video lesson titled "${videoContext?.title}". 
Here is the transcript/summary of the video context: "${videoContext?.transcript}". 
Answer the user's question accurately based on this context. Keep your response under 3 short paragraphs.`;

      // Format previous messages for context
      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...messages.map(m => ({ role: m.role, content: m.text })),
        { role: 'user', content: userText }
      ];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: apiMessages,
          temperature: 0.5,
          max_tokens: 500,
        })
      });

      if (!response.ok) {
        throw new Error(`Groq API Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantReply = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'assistant', text: assistantReply }]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I encountered an error connecting to my brain." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="ai-assistant-container" style={{
      marginTop: '24px',
      background: 'var(--card-bg)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '400px'
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        background: 'rgba(0,0,0,0.2)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 'bold',
        color: 'var(--yellow)'
      }}>
        <Bot size={20} />
        LLaMA Video Assistant
      </div>

      {/* Chat Area */}
      <div style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: msg.role === 'user' ? 'var(--blue)' : 'var(--darker)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} color="var(--yellow)" />}
            </div>
            <div style={{
              background: msg.role === 'user' ? 'var(--blue)' : 'rgba(255,255,255,0.05)',
              padding: '12px 16px',
              borderRadius: '16px',
              borderTopRightRadius: msg.role === 'user' ? '4px' : '16px',
              borderTopLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
              maxWidth: '80%',
              lineHeight: '1.5',
              fontSize: '0.95rem'
            }}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
            >
            </div>
          </div>
        ))}
        {isTyping && (
           <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
           <div style={{
             width: '32px', height: '32px', borderRadius: '50%',
             background: 'var(--darker)', display: 'flex', alignItems: 'center', justifyContent: 'center',
             flexShrink: 0
           }}>
             <Bot size={16} color="var(--yellow)" />
           </div>
           <div style={{
             background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '16px',
             borderTopLeftRadius: '4px', maxWidth: '80%'
           }}>
             <Loader2 size={16} className="spin" color="var(--muted)" />
           </div>
         </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} style={{
        padding: '16px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        gap: '12px'
      }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about the video..."
          style={{
            flex: 1,
            background: 'rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '12px 16px',
            color: 'white',
            outline: 'none',
            fontSize: '0.95rem'
          }}
          disabled={isTyping}
        />
        <button type="submit" disabled={isTyping || !input.trim()} style={{
          background: 'var(--blue)',
          border: 'none',
          borderRadius: '8px',
          width: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: (isTyping || !input.trim()) ? 'not-allowed' : 'pointer',
          opacity: (isTyping || !input.trim()) ? 0.5 : 1,
          color: 'white'
        }}>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default VideoAssistantQA;
