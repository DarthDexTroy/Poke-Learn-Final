import React, { useEffect } from 'react';
import { create } from 'zustand';

// Notif Store
export const useNotifStore = create((set) => ({
  message: '',
  show: false,
  showNotif: (msg) => set({ message: msg, show: true }),
  hideNotif: () => set({ show: false })
}));

export const Notification = () => {
  const { message, show, hideNotif } = useNotifStore();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(hideNotif, 2800);
      return () => clearTimeout(timer);
    }
  }, [show, hideNotif]);

  return (
    <div className={`notif ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
};
