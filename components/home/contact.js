import { Button } from '../common/Buttons';

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-gray-300 border-t lg:border-0 mx-8 py-36 md:mx-auto min-h-screen flex flex-col justify-center align-middle">
      <div className="md:text-center md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <div>
          <h2>Get in touch with me</h2>
          <p>
            If you have any questions, want to collaborate on a project or just
            strike up a conversation you can reach me at
            <span className="font-bold"> juliebernadette@gmail.com</span> or
            fill out the form below to send me a message.
          </p>
        </div>
        <form action="#" method="POST">
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
                    autoComplete="given-name"
                    className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></input>
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
                    autoComplete="family-name"
                    className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></input>
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></input>
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
                      rows="5"
                      className="border p-2 shadow-sm hover:border-gray-400 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Write your message here"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button>Send message</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
