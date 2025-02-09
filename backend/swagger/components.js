const components = {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Unique identifier for the user",
            example: "650c7c3d5e6f6a3b9a8f4d1b"
          },
          email: {
            type: "string",
            format: "email",
            description: "User's email address",
            example: "user@example.com"
          },
          password: {
            type: "string",
            description: "Hashed password of the user",
            example: "$2b$10$EIXISZV.zW7YFsdvJz2.LuwOB4uhox36H."
          }
        },
        required: ["email", "password"]
      },
      
      Book: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Unique identifier for the book",
            example: "507f1f77bcf86cd799439011"
          },
          title: {
            type: "string",
            description: "Title of the book",
            example: "The Great Gatsby"
          },
          author: {
            type: "string",
            description: "Author of the book",
            example: "F. Scott Fitzgerald"
          },
          rating: {
            type: "number",
            format: "integer",
            description: "Rating of the book from 1-5",
            example: 4
          },
          user_id: {
            type: "string",
            description: "ID of the user who added the book",
            example: "650c7c3d5e6f6a3b9a8f4d1b"
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Timestamp when the book was added"
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Timestamp when the book was last updated"
          }
        },
        required: ["title", "author", "rating", "user_id"]
      },
      
      ErrorResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Invalid email or password"
          }
        }
      }
    },
    
    responses: {
      UnauthorizedError: {
        description: "Access token is missing or invalid",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ErrorResponse"
            }
          }
        }
      },
      BadRequest: {
        description: "Invalid request parameters",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ErrorResponse"
            }
          }
        }
      }
    },
    
    parameters: {
      UserIdParam: {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string"
        },
        description: "ID of the user"
      },
      BookIdParam: {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string"
        },
        description: "ID of the book"
      }
    }
  };
  
  module.exports = components;
  