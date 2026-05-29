import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import FormField from './FormField';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Subject is required.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

const ContactForm: React.FC = () => {
  const [state, handleFormspreeSubmit] = useForm('xnjrrpbe');
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState(false);

  // Clear fields and reset error state when submission succeeds
  React.useEffect(() => {
    if (state.succeeded) {
      setValues(initialValues);
      setErrors({});
      setSubmitError(false);
    }
  }, [state.succeeded]);

  // Show error banner when Formspree reports errors
  React.useEffect(() => {
    if (state.errors && (state.errors as unknown as { length?: number }).length) {
      setSubmitError(true);
    }
  }, [state.errors]);

  const handleChange = (field: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear the inline error for this field as the user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(false);

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      await handleFormspreeSubmit(e);
    } catch {
      setSubmitError(true);
    }
  };

  if (state.succeeded) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/20"
      >
        <p className="text-base font-medium text-green-700 dark:text-green-400">
          Thanks! Your message has been sent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <FormField
        id="name"
        label="Name"
        type="text"
        value={values.name}
        onChange={handleChange('name')}
        error={errors.name}
        placeholder="Your full name"
        required
      />

      <FormField
        id="email"
        label="Email"
        type="email"
        value={values.email}
        onChange={handleChange('email')}
        error={errors.email}
        placeholder="you@example.com"
        required
      />

      <FormField
        id="subject"
        label="Subject"
        type="text"
        value={values.subject}
        onChange={handleChange('subject')}
        error={errors.subject}
        placeholder="What's this about?"
        required
      />

      <FormField
        id="message"
        label="Message"
        type="textarea"
        value={values.message}
        onChange={handleChange('message')}
        error={errors.message}
        placeholder="Write your message here…"
        required
      />

      {submitError && (
        <div
          role="alert"
          className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
        >
          Message could not be sent. Please try again or contact me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-1 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-900"
      >
        {state.submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
