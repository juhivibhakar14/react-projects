# VYBE - Real-Time Chat Application

VYBE is a modern, responsive, and dynamic real-time chat application built with React, Tailwind CSS, and Stream Chat.

## 🚀 Features

*   **Real-time Messaging:** Lightning-fast chat infrastructure powered by Stream Chat.
*   **Dynamic Channel Creation:** Search for users and instantly create new 1-on-1 or group conversations.
*   **Message Threads:** Reply directly to specific messages using built-in thread support.
*   **Sleek UI/UX:** Built with Tailwind CSS, featuring beautiful gradients, glassmorphism elements, and a clean dark mode aesthetic.
*   **User Authentication:** Dynamic auth flow (currently using local storage for demo purposes, allowing easy testing of multiple accounts).
*   **Responsive Sidebar:** Dynamic channel list that updates automatically when you are added to new conversations.

## 🛠️ Tech Stack

*   **Frontend:** React (Create React App), React Router
*   **Styling:** Tailwind CSS
*   **Chat Backend/SDK:** [Stream Chat](https://getstream.io/chat/) (`stream-chat`, `stream-chat-react`)

## ⚙️ Local Setup & Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/yourusername/react-projects.git
    cd react-projects/chat-application
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root of the project and add your Stream API key:
    ```env
    REACT_APP_STREAM_API_KEY=your_stream_api_key_here
    ```
    *(Note: For development, ensure "Disable Auth Checks" is turned ON in your Stream Dashboard so you can use developer tokens).*

4.  **Run the App:**
    ```bash
    npm start
    ```
    The application will launch at `http://localhost:3000`.

## 🧪 How to Test (Development Mode)

Since the app uses developer tokens and local storage for authentication, you can easily test chatting between two users locally:

1.  Open the app in your normal browser window and register a new user (e.g., User A).
2.  Open an **Incognito/Private window** and register a second user (e.g., User B).
3.  In either window, click the **"+"** button in the sidebar.
4.  You will see the other user in the list. Click their name to start a new chat.
5.  Send messages back and forth in real-time!

## 🚀 Deployment (Vercel)

When deploying to Vercel, remember to add `REACT_APP_STREAM_API_KEY` to your Vercel Project's **Environment Variables** settings before deploying.
