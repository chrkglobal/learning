import { useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      subject: "Order Delay",
      message: "My order is delayed, can you please update?",
      time: "10:30 AM",
      status: "Unread",
    },
    {
      id: 2,
      sender: "Sarah Lee",
      subject: "Product Inquiry",
      message: "Do you have this product in stock?",
      time: "Yesterday",
      status: "Read",
    },
    {
      id: 3,
      sender: "Michael Smith",
      subject: "Payment Issue",
      message: "Payment failed but amount was deducted.",
      time: "2 days ago",
      status: "Unread",
    },
  ]);

  const markAsRead = (id) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, status: "Read" } : msg
      )
    );
  };

  return (
    <div className="container mt-4">
      <h1>💬 Messages</h1>

      <div className="list-group mt-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${
              msg.status === "Unread" ? "list-group-item-warning" : ""
            }`}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{msg.subject}</div>
              <small className="text-muted">
                From: {msg.sender} • {msg.time}
              </small>
              <p className="mb-1">{msg.message}</p>
            </div>
            {msg.status === "Unread" && (
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => markAsRead(msg.id)}
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
