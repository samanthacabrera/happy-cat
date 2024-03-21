import React from "react";
import { useNavigate } from "react-router-dom";

function HowToUse() {
  const navigate = useNavigate();

  const handleNavToLogin = () => {
    // Navigate to the login page when the button is clicked
    navigate('/login');
  };
    return (
        <div className="">
        <p>HappyCat.com is a tool designed to help cat owners monitor and track various aspects of their cat's health and well-being.</p>
        <p>How to get started... </p>
        <ol>
            <li>Add Your Cat: Once logged in, you can add your cat to the tracker by providing some basic information such as their name, age, breed, and any existing health conditions. This allows you to create a personalized health profile for your cat.</li>
            <li>Explore toolbox: </li>
            <li>Record Health Data: Keep track of your cat's daily feeding schedules and dietary habits, exercise routines and activity levels.
                Medication dosage and frequency</li>
            <li>Set reminders: Utilize the reminder feature to set up notifications for important tasks such as medication doses, vaccination schedules, or upcoming vet appointments. This helps ensure that you never miss an important event related to your cat's health.</li>
            <li>Stay Informed: Take advantage of resources and articles provided on the website to learn more about common cat health issues, preventive care tips, and best practices for maintaining your cat's well-being.</li>
        </ol>
        <button onClick={handleNavToLogin}>Go to Login</button>
    </div>
    )
}

export default HowToUse