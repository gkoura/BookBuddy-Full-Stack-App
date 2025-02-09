const paths = {
  
    "/api/user/login": {
      post: {
        tags: ["User"],
        summary: "Login a user",
        description: "Logs in an existing user and returns a JWT token.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string", example: "user@example.com" },
                  password: { type: "string", example: "password123" }
                },
                required: ["email", "password"]
              }
            }
          }
        },
        responses: {
          200: {
            description: "Successful login",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: { type: "string" },
                    token: { type: "string" }
                  }
                }
              }
            }
          },
          400: { $ref: "#/components/responses/BadRequest" }
        }
      }
    },
    
    "/api/user/signup": {
      post: {
        tags: ["User"],
        summary: "Signup a user",
        description: "Creates a new user account and returns a JWT token.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string", example: "newuser@example.com" },
                  password: { type: "string", example: "SecurePassword123" }
                },
                required: ["email", "password"]
              }
            }
          }
        },
        responses: {
          200: {
            description: "User created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: { type: "string" },
                    token: { type: "string" }
                  }
                }
              }
            }
          },
          400: { $ref: "#/components/responses/BadRequest" }
        }
      }
    },
    
    "/api/books": {
      get: {
        tags: ["Books"],
        summary: "Get all books",
        description: "Retrieves a list of all books added by the authenticated user.",
        responses: {
          200: {
            description: "A list of books",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Book" }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Books"],
        summary: "Create a new book",
        description: "Adds a new book to the user's collection.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Book"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Book created successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Book" }
              }
            }
          },
          400: { $ref: "#/components/responses/BadRequest" }
        }
      }
    },
    
    "/api/books/{id}": {
      get: {
        tags: ["Books"],
        summary: "Get a single book",
        description: "Retrieves a book by its ID.",
        parameters: [{ $ref: "#/components/parameters/BookIdParam" }],
        responses: {
          200: {
            description: "Book details",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Book" }
              }
            }
          },
          404: { $ref: "#/components/responses/BadRequest" }
        }
      },
      delete: {
        tags: ["Books"],
        summary: "Delete a book",
        description: "Removes a book by its ID.",
        parameters: [{ $ref: "#/components/parameters/BookIdParam" }],
        responses: {
          200: {
            description: "Book deleted successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Book" }
              }
            }
          },
          404: { $ref: "#/components/responses/BadRequest" }
        }
      },
      patch: {
        tags: ["Books"],
        summary: "Update a book",
        description: "Updates an existing book's details.",
        parameters: [{ $ref: "#/components/parameters/BookIdParam" }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Book"
              }
            }
          }
        },
        responses: {
          200: {
            description: "Book updated successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Book" }
              }
            }
          },
          404: { $ref: "#/components/responses/BadRequest" }
        }
      }
    }
  };
  
  module.exports = paths;
  