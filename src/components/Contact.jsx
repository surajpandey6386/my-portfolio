
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

import { Section, Reveal } from './ui';
import { profile } from '../data/data';

const env = import.meta.env;

const configured = Boolean(
  env.VITE_EMAILJS_SERVICE_ID &&
  env.VITE_EMAILJS_TEMPLATE_ID &&
  env.VITE_EMAILJS_PUBLIC_KEY
);

const empty = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export default function Contact() {
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [st, setSt] = useState({
    s: 'idle',
    m: ''
  });

  const validate = () => {
    const errors = {};

    if (f.name.trim().length < 2) {
      errors.name = 'Please enter your name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (f.subject.trim().length < 3) {
      errors.subject = 'Subject must contain at least 3 characters.';
    }

    if (f.message.trim().length < 10) {
      errors.message = 'Message must contain at least 10 characters.';
    }

    return errors;
  };

  const updateField = (key, value) => {
    setF(prev => ({
      ...prev,
      [key]: value
    }));

    setErr(prev => ({
      ...prev,
      [key]: ''
    }));

    if (st.s !== 'idle') {
      setSt({ s: 'idle', m: '' });
    }
  };

  const submit = async (event) => {
    event.preventDefault();

    const errors = validate();
    setErr(errors);

    if (Object.keys(errors).length > 0) return;

    if (!configured) {
      setSt({
        s: 'error',
        m: `Contact form is not configured yet. Please email ${profile.email} directly.`
      });
      return;
    }

    setSt({
      s: 'sending',
      m: ''
    });

    try {
      await emailjs.send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: f.name.trim(),
          from_email: f.email.trim(),
          subject: f.subject.trim(),
          message: f.message.trim()
        },
        {
          publicKey: env.VITE_EMAILJS_PUBLIC_KEY
        }
      );

      setF(empty);
      setErr({});

      setSt({
        s: 'ok',
        m: 'Message sent successfully! Thank you for contacting me.'
      });

    } catch (error) {
      console.error('EmailJS error:', error);

      setSt({
        s: 'error',
        m: `Unable to send your message. Please try again or email ${profile.email}.`
      });

    }
  };

  const fields = [
    {
      key: 'name',
      label: 'Your Name',
      placeholder: 'Enter your name',
      type: 'text'
    },
    {
      key: 'email',
      label: 'Email Address',
      placeholder: 'your@email.com',
      type: 'email'
    },
    {
      key: 'subject',
      label: 'Subject',
      placeholder: 'What would you like to discuss?',
      type: 'text'
    }
  ];

  return (
    <Section
      id="contact"
      title="Let's Connect"
      className="contact-section"
    >

      <p className="section-intro">
        Have an opportunity, project idea or just want
        to connect? I'd love to hear from you.
      </p>

      <div className="contact premium-contact">

        {/* Contact details */}
        <Reveal className="glass card cinfo premium-cinfo">

          <div className="contact-heading">
            <div className="contact-heading-icon">
              <MessageCircle size={24} />
            </div>

            <h3>Let's talk</h3>

            <p className="muted">
              Feel free to reach out through any of these platforms.
            </p>
          </div>

          <a
            className="contact-link"
            href={`mailto:${profile.email}`}
          >
            <span className="contact-link-icon">
              <Mail size={19} />
            </span>

            <span>
              <small>Email</small>
              <strong>{profile.email}</strong>
            </span>

            <ArrowUpRight size={17} />
          </a>

          <a
            className="contact-link"
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          >
            <span className="contact-link-icon">
              <Phone size={19} />
            </span>

            <span>
              <small>Phone</small>
              <strong>{profile.phone}</strong>
            </span>

            <ArrowUpRight size={17} />
          </a>

          <a
            className="contact-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon">
              <Linkedin size={19} />
            </span>

            <span>
              <small>LinkedIn</small>
              <strong>Connect professionally</strong>
            </span>

            <ArrowUpRight size={17} />
          </a>

          <a
            className="contact-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon">
              <Github size={19} />
            </span>

            <span>
              <small>GitHub</small>
              <strong>Explore my projects</strong>
            </span>

            <ArrowUpRight size={17} />
          </a>

          <div className="contact-location">
            <MapPin size={16} />
            {profile.location}
          </div>

        </Reveal>

        {/* Contact form */}
        <Reveal className="glass card contact-form-card">

          <div className="form-heading">
            <span>GET IN TOUCH</span>
            <h3>Send me a message</h3>
            <p className="muted">
              I'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={submit} noValidate>

            {fields.map(field => (
              <label className="fld" key={field.key}>

                {field.label}

                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={f[field.key]}
                  onChange={event =>
                    updateField(field.key, event.target.value)
                  }
                  aria-invalid={Boolean(err[field.key])}
                  aria-describedby={
                    err[field.key]
                      ? `${field.key}-error`
                      : undefined
                  }
                  required
                />

                {err[field.key] && (
                  <span
                    className="err"
                    id={`${field.key}-error`}
                    role="alert"
                  >
                    {err[field.key]}
                  </span>
                )}

              </label>
            ))}

            <label className="fld">

              Your Message

              <textarea
                rows={5}
                placeholder="Write your message here..."
                value={f.message}
                onChange={event =>
                  updateField('message', event.target.value)
                }
                aria-invalid={Boolean(err.message)}
                aria-describedby={
                  err.message ? 'message-error' : undefined
                }
                required
              />

              {err.message && (
                <span
                  className="err"
                  id="message-error"
                  role="alert"
                >
                  {err.message}
                </span>
              )}

            </label>

            <button
              type="submit"
              className="btn primary contact-submit"
              disabled={st.s === 'sending'}
            >

              {st.s === 'sending' ? (
                'Sending message...'
              ) : (
                <>
                  <Send size={17} />
                  Send Message
                </>
              )}

            </button>

            {st.m && (
              <p
                role="status"
                className={st.s === 'ok' ? 'ok' : 'err form-status'}
              >
                {st.s === 'ok' && (
                  <CheckCircle2 size={17} />
                )}

                {st.m}
              </p>
            )}

          </form>

        </Reveal>

      </div>

    </Section>
  );
}
