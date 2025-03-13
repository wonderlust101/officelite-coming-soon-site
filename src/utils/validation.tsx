interface ValidationErrors {
    [key: string]: {error: boolean};
}

/**
 * Validates if a field is empty and updates the errors object accordingly.
 *
 * @param {string} field - The name of the field being validated.
 * @param {string} value - The value of the field to check.
 * @param errors - The object storing validation errors.
 */
export function emptyValidation(field: string, value: string, errors: ValidationErrors) {
    if (!value) {
        errors[field] = { error: true };
    } else {
        delete errors[field];
    }
}

/**
 * Validates a phone number by checking if it is empty or has an invalid length.
 *
 * @param {string} value - The phone number value to validate.
 * @param errors - The object storing validation errors.
 */
export function phoneNumberValidation(value: string, errors: ValidationErrors) {
    emptyValidation("phoneNumber", value, errors);

    if (value && value.length <= 9) {
        errors.phoneNumber = { error: true };
    }
}

/**
 * Validates an email address by checking if it is empty or does not match the email pattern.
 *
 * @param {string} value - The email value to validate.
 * @param errors - The object storing validation errors.
 */
export function emailValidation(value: string, errors: ValidationErrors) {
    emptyValidation("email", value, errors);

    if (value && !isValidEmail(value)) {
        errors.email = { error: true };
    }
}

/**
 * Checks if an email is in a valid format.
 *
 * @param {string} email - The email string to validate.
 * @returns boolean - Returns true if the email is valid, otherwise false.
 */
export const isValidEmail = (email: string): boolean => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};