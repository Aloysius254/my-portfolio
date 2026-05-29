import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Have a project in mind or just want to say hi? Send me a message.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
