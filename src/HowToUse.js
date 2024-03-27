import React from "react";
import { useNavigate } from "react-router-dom";

function HowToUse({toggleLogin}) {


  const navigate = useNavigate();
  const handleNavToLogin = () => {
    navigate('/login');
  };
    return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <p className="text-lg text-gray-700 mb-4">
        HappyCat.com is a tool designed to help cat owners monitor and track various aspects of their cat's health and well-being.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 pt-4 mb-4">How to get started...</h2>
        <ol className="list-decimal pl-6">
          <li className="mb-4">
            <span className="block text-lg font-semibold text-gray-700 mb-2">Add Your Cat:</span>
            Once logged in, you can add your cat to the tracker by providing some basic information such as their name, age, breed, and any existing health conditions. This allows you to create a personalized health profile for your cat.
          </li>
          <li className="mb-4">
            <span className="block text-lg font-semibold text-gray-700 mb-2">Explore toolbox:</span>
            After adding your cat, you can explore various tools provided by HappyCat.com. These tools include a comprehensive dashboard to monitor your cat's health parameters and educational resources on common feline health issues.
          </li>
          <li className="mb-4">
            <span className="block text-lg font-semibold text-gray-700 mb-2">Record Health Data:</span>
            Keep track of your cat's daily feeding schedules, dietary habits, exercise routines, and activity levels using the intuitive interface provided by HappyCat.com. You can also record medication dosage and frequency to ensure your cat's well-being.
          </li>
          <li className="mb-4">
            <span className="block text-lg font-semibold text-gray-700 mb-2">Set reminders: (coming soon)</span>
            Utilize the reminder feature to set up notifications for important tasks such as medication doses, vaccination schedules, or upcoming vet appointments. This helps ensure that you never miss an important event related to your cat's health.
          </li>
          <li className="mb-4">
            <span className="block text-lg font-semibold text-gray-700 mb-2">Stay Informed:</span>
            Take advantage of resources and articles provided on HappyCat.com to learn more about common cat health issues, preventive care tips, and best practices for maintaining your cat's well-being. Stay updated with the latest information in feline healthcare to provide the best possible care for your furry friend.
          </li>
        </ol>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleNavToLogin}
      >
        Go to Login
      </button>
      <p className="text-sm text-gray-600 mt-4">
        Disclaimer: HappyCat.com offers tools for cat owners to track various health parameters and common chronic diseases in felines. It does not replace professional veterinary advice or diagnosis. Please consult with a qualified veterinarian for personalized recommendations and treatment plans based on a comprehensive evaluation of your cat's health status.
      </p>
    </div>
    )
}

export default HowToUse