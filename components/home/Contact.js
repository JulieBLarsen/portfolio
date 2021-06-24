import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from '../../lib/id';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { RefreshIcon, CheckCircleIcon } from '@heroicons/react/outline';

const schema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .required('Please enter your first name'),
  last_name: yup
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .required('Please enter your last name'),
  email: yup
    .string()
    .required('Please enter your email address')
    .email('Please enter a valid email address'),
  message: yup.string().required('Please enter a message'),
});

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('Send Message');

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setSubmitMessage(
      <>
        <RefreshIcon className="animate-spin-reverse inline w-5 mr-2" />
        Sending Message
      </>
    );
    setSubmitError(null);
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setSubmitting(false);
          setSubmitMessage(
            <>
              <CheckCircleIcon className=" inline w-5 mr-2" />
              Message Sent
            </>
          );
          reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitError(error.text);
        }
      );
  }

  return (
    <section
      id="contact"
      className="py-36 md:mx-auto min-h-screen flex flex-col justify-center align-middle items-center text-center sm:items-baseline sm:text-left">
      <div className="md:text-center  lg:w-1/2 mx-auto">
        <div>
          <h2>Get in touch with me</h2>
          <p>
            If you have any questions, want to collaborate on a project or just
            strike up a conversation you can reach me at
            <span className="font-bold"> juliebernadette@gmail.com</span> or
            fill out the form below to send me a message.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={submitting}>
            <div className="mt-14 shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6 text-left">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      ref={register}
                      autoComplete="given-name"
                      className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></input>
                    {errors.first_name && <p>{errors.first_name.message}</p>}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      ref={register}
                      autoComplete="family-name"
                      className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></input>
                    {errors.last_name && <p>{errors.last_name.message}</p>}
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      ref={register}
                      className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></input>
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        ref={register}
                        rows="5"
                        className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Write your message here"></textarea>
                      {errors.message && <p>{errors.message.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 bg-gray-50 sm:px-6">
                <div>{submitError ? <p>{submitError}</p> : null}</div>
                <button
                  type="submit"
                  className="cursor-pointer flex flex-none flex-row items-center justify-center transition mr-4 py-2 px-5 text-sm font-medium rounded-md text-white bg-purple-600 shadow leading-loose no-underline hover:bg-purple-500 hover:text-white hover:shadow-lg focus:shadow-none focus:bg-purple-600 focus:outline-none active:bg-purple-700 active:shadow-none
">
                  {submitMessage}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
