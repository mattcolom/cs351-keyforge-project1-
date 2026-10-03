# CreateAccount demo

**Recording:** REPLACE_VIDEO_URL

Before submission, record the demonstration using `docs/DEMO-SCRIPT.md`, upload it to YouTube or the repository, and replace the link above.

## Validation shown in the recording

1. Empty form: username, password, and email errors.
2. Partial form: valid username but missing password/email.
3. Invalid formats: malformed email, short ZIP, and invalid phone.
4. Complete form: valid sample information displays the demo-success message.

Username must be 3–20 letters/numbers/underscores. Password must be 8–72 characters. Email must have a local part, @ sign and domain with a dot. Optional street and city entries are checked for reasonable length/format; state is chosen from US abbreviations; ZIP is five digits or ZIP+4; phone is ten US-format digits or eleven with a leading 1. Optional fields can be left blank.

`AccountForm` manages controlled inputs and error state, while `src/utils/validation.js` returns field-specific errors. Submission is blocked when any error remains. After an attempt, correcting inputs updates errors. The first invalid field is focused. Success clears the password and explicitly states that no real account is created.

No information is stored or transmitted, and no database or authentication service is involved.
