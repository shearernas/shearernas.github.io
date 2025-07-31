import React from 'react';
import { Send } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgvzzrnj");
  if (state.succeeded) {
      return <div className='h-auto align-middle block text-lg font-semibold p-5 text-center'>
        <p>Thanks for your message, we'll talk soon!</p>
      </div>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium pb-3">
                Your Name
            </label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder="Jane Doe" />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors}/>
        <div>
            <label htmlFor="email" className="block text-sm font-medium pb-3">
                Your Email
            </label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder="janedoe@gmail.com" />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
        <div>
            <label htmlFor="message" className="block text-sm font-medium pb-3">
                Your Message
            </label>
            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
            placeholder="Hello..." />
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <button type="submit" disabled={state.submitting} className= "cosmic-button w-full flex items-center justify-center gap-2">
            Send Message
            <Send size={16} />
        </button>
    </form>
  );
}

export default ContactForm;
