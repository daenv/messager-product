// Interface for user data
export interface User {
   id: string;
   name?: string | null; // Optional name
   email?: string | null; // Optional email
   emailVerified?: Date | null; // Optional date of email verification
   image?: string | null; // Optional image URL
   hashedPassword?: string | null; // Optional hashed password (should not be exposed for security reasons)
   createdAt: Date;
   updatedAt: Date;
   // Conversation and message IDs represented as strings for simplicity
   // You can change them to more suitable types if needed
   conversationIds: string[];
   seenMessageIds: string[];
}

// Sample user data
const users: User[] = [
   {
      id: 'u1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      emailVerified: new Date('2024-02-27T00:00:00.000Z'),
      image: 'https://example.com/profile-pictures/john-doe.jpg',
      // hashedPassword: "omitted for security reasons",
      createdAt: new Date('2023-10-26T15:00:00.000Z'),
      updatedAt: new Date('2024-02-27T10:00:00.000Z'),
      conversationIds: ['conversation-1', 'conversation-2'],
      seenMessageIds: ['message-1', 'message-3', 'message-5'],
   },
   {
      id: 'u2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      image: 'https://example.com/profile-pictures/jane-smith.jpg',
      // hashedPassword: "omitted for security reasons",
      createdAt: new Date('2023-11-15T12:00:00.000Z'),
      updatedAt: new Date('2024-02-25T18:00:00.000Z'),
      conversationIds: ['conversation-3', 'conversation-4'],
      seenMessageIds: ['message-2', 'message-4'],
   },
   // ... add more users if needed
];

export { users };
