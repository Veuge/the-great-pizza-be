class NotFoundError extends Error {
  constructor(message) {
    // Providing default message and overriding status code.
    super(message || "Database record not found", 404);
    this.name = "NotFoundError";
  }
}

class InternalError extends Error {
  constructor(message) {
    // Providing default message and overriding status code.
    super(message || "Internal error", 500);
    this.name = "InternalError";
  }
}

export { NotFoundError, InternalError };
