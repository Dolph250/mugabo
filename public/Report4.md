﻿
# Assignment 4: Developing an Application with the Aid of LLM

## I. Software Design and Development

### Background and Functionality

The primary objective of this application is to integrate a Large Language Model (LLM) into a standalone desktop application to provide intelligent chatbot functionalities. This project is designed to support academic and research efforts, by enabling natural language interactions with an AI assistant.

The key functionalities include:

- A user-friendly chat interface.
- AI-powered responses using OpenAI’s GPT model.
- AJAX-powered interactions to simulate real-time communication.
- Compilation into a desktop application (.exe).


---

### Development with AI Assistance

Large language models were actively used during development to:
- Integrating OpenAI API by using Python.
- Solve integration issues between AJAX and Django backend.
- Automate configuration steps in PyInstaller and Inno Setup.
- Conducting research regarding voice integration and local LLM model implementation strategies (not yet implemented, to be used in the future instead).
- Debug packaging issues during the standalone build.

---

### Software Functionalities

- Chat with OpenAI-powered assistant.
- AJAX-based live interaction without page reloads.
- Executable `.exe` desktop app.
- Packaged installer using Inno Setup for easy installation.

---

## II. Report Documentation



### Development Environment


<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Component</th>
      <th>Specification/Tool</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>OS</strong></td>
      <td>Windows 10</td>
    </tr>
    <tr>
      <td><strong>Processor</strong></td>
      <td>Intel(R) Core(TM) i7-4980HQ CPU @ 2.80GHz</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td>16 GB</td>
    </tr>
    <tr>
      <td><strong>Python Version</strong></td>
      <td>3.11.2</td>
    </tr>
    <tr>
      <td><strong>Framework</strong></td>
      <td>Django 5.2.2</td>
    </tr>
    <tr>
      <td><strong>Frontend</strong></td>
      <td>HTML, AJAX, Bootstrap</td>
    </tr>
    <tr>
      <td><strong>Desktop Wrapper</strong></td>
      <td>pywebview 5.4</td>
    </tr>
    <tr>
      <td><strong>Tools Used</strong></td>
      <td>
        - PyInstaller 6.14.1<br>
        - Inno Setup 6.4.3<br>
        - OpenAI API: <code>gpt-3.5-turbo</code><br>
        - Visual Studio Code<br>
        - GitHub (version control)
      </td>
    </tr>
  </tbody>
</table>


---

### Development Process

#### 1. Planning

- Chose Django due to its robustness and modularity.
- Designed UI with a chat interface and submit button.
- Focused on real-time backend-frontend communication using AJAX.

#### 2. Integration with LLM

- Created a Django view to send prompt to OpenAI API and return responses.
- Optimized response parsing and error handling.
- Used OpenAI GPT-3.5 Turbo for the main language model tasks.

#### 3. Compilation

- Used `PyInstaller` to convert the Django project into a standalone desktop app.
- Applied `--onefile` and `--noconsole` options for a user-friendly experience.
- Configured `Inno Setup` to package the app into an installer.

#### 4. Testing & Debugging

- Resolved static file loading issues in PyInstaller.
- Ensured that AJAX and chatbot worked correctly in the `.exe` build.
- Created icons, customized installer UI with `Inno Setup`.

---

### Results

- **Screenshots**:  
  ![Installing standalone application prior to using Chatbot](https://raw.githubusercontent.com/Dolph250/LLM-powered-app/refs/heads/main/Capture1.PNG)

  ![Chatbot interface after installing the executable file](https://raw.githubusercontent.com/Dolph250/LLM-powered-app/refs/heads/main/Capture1a.PNG)


- **Download Link (Executable Installer)**:  
  [Download App Installer (.exe)](https://drive.google.com/file/d/1iZdx0TQVRYEfrmmpPtvkSj2NUypuds2y/view?usp=sharing)

> **N.B.**: This application is not yet digitally signed or published.  
> To ensure a smooth installation and execution:
> - Please **temporarily disable your antivirus**, or  
> - **Add the application as an exception** in your antivirus settings.  
> Some antivirus software may falsely flag unsigned executables and block or corrupt them during installation.

---

### Source Code

The full source code is available on GitHub:  
 [GitHub Repository](https://github.com/Dolph250/LLM-powered-app.git)

---


## III. To-Do List

The application is functional, but not yet feature-complete. Planned improvements include:

1. **Voice Integration**  
   - Allow users to dictate prompts via microphone using `Web Speech API` or Python libraries like `speech_recognition`.

2. **Local Model Training**  
   - Replace reliance on OpenAI API by training a local LLM using advanced algorithms such as:
     - **Artificial Neural Networks (ANN)**
     - **Transformer-based architectures**
   - Tools: Hugging Face Transformers, LangChain, Ollama

3. **macOS (.dmg) Build**  
   - Create an installer compatible with macOS using tools like `py2app` or `Briefcase`.

4. **Image Input with CNN Support**  
   - Enable users to upload images and generate responses using CNN-based image classification or captioning.

5. **User Authentication**  
   - Add **sign-up and login features**.
   - Ensure that only registered users can access the chatbot interface.
   - Allow saving chat history per user session.

   **The following is the interface that will let users sign up prior to using chatbot, however, it is still under development**:  
 
  ![The interface that will allow users to sign up](https://raw.githubusercontent.com/Dolph250/LLM-powered-app/refs/heads/main/Capture2.PNG)

6. **Domain Integration (Remote Sensing & GIS)**  
   - Enhance chatbot to answer questions related to:
     - Satellite imagery
     - Raster/vector data processing
     - Flood mapping, land cover analysis, etc.
   - Integrating Earth Engine API.


---


## Summary

This project demonstrates how LLMs can empower intelligent software design by bridging python frameworks (Django) with cutting-edge AI capabilities. It aligns with both academic and applied research goals.


