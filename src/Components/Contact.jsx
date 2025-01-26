import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-7xl w-full px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch With Us
          </h1>
          <p className="text-gray-600 mt-4">
            For more details about our products and services, feel free to send us an email.
            <br />
            Our team is always ready to assist you, so donot hesitate to reach out!
          </p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Address Section */}
          <div className="space-y-10 md:w-1/2">
            <div className="flex items-start gap-4">
              <LocationOnIcon className="text-blue-600 text-3xl" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Address</h2>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon className="text-blue-600 text-3xl" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <AccessTimeIcon className="text-blue-600 text-3xl" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Working Time</h2>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                  <input
                    type="email"
                    placeholder="Email address"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                  <input
                    type="text"
                    placeholder="This is an optional"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                  <textarea
                    placeholder="Hi! I'd like to ask about"
                    rows="4"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </label>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact