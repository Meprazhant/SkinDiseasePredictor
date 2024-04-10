"use client";
import React from "react";

function ModelHome() {
  return (
    <div className="flex w-full p-5 flex-col">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/539/808/original/vector-ai-artificial-intelligence-concept-illustration.jpg"
        alt="AI Model"
        className="object-cover object-center w-full h-96 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
      />
      <div className="flex flex-col gap-4 p-5">
        <h1 className="text-3xl font-semibold tracking-wide">AI Model</h1>
        <p className="dark:text-gray-800">
          This is the AI model that is used to predict the skin diseases.
        </p>
        <p className="dark:text-gray-800">
          This model is trained on a dataset of 10,000 images of skin diseases.
        </p>
        <h2 className="text-2xl font-bold">About The Model</h2>
        <p className="text-gray-800">
          The Skin Disease Prediction API utilizes a deep learning model for
          predicting skin diseases. The model is trained using TensorFlow, an
          open-source machine learning framework developed by Google, and Keras,
          a high-level neural networks API that runs on top of TensorFlow.
        </p>
        <h2 className="text-2xl font-bold">Model Archetecture</h2>
        <p className="text-gray-800">
          The deep learning model used by the API is a convolutional neural
          network (CNN) architecture. CNNs are particularly well-suited for
          image classification tasks. The model architecture consists of
          multiple layers, including convolutional layers, pooling layers, and
          fully connected layers. It is trained on a dataset containing images
          of various skin diseases and their corresponding labels.
        </p>
        <h2 className="text-2xl font-bold">Model Classes</h2>
        <p className="dark:text-gray-800">
          The model is capable of classifying skin disease images into the
          following classes:
        </p>
        <ul className="list-disc list-inside dark:text-gray-800">
          <li>Actinic keratosis</li>
          <li>Basal cell carcinoma</li>
          <li>Benign keratosis</li>
          <li>Dermatofibroma</li>
          <li>Melanocytic nevus</li>
          <li>Melanoma</li>
          <li>Squamous cell carcinoma</li>
          <li>Vascular lesion</li>
        </ul>
      </div>
    </div>
  );
}

export default ModelHome;
