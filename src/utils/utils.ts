export function getErrorMessage(error: string) {
    switch (error) {
        case "auth/email-already-in-use":
            return "An account with this email already exists.";
        case "auth/weak-password":
            return "Password must be at least 6 characters.";
        case "auth/invalid-credential":
            return "Invalid email or password. Please try again.";
        case "auth/invalid-email":
            return "Please enter a valid email address.";
        case "auth/missing-email":
            return "Email address is required.";
        case "auth/missing-password":
            return "Password is required.";

        default:
            return "Something went wrong. Please try again.";
    }
}
