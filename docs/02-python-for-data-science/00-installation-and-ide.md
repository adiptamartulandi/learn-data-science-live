---
sidebar_position: 1
---
# Python Installation and IDE

![Python Programming Image](https://raw.githubusercontent.com/adiptamartulandi/learn-data-science-live/main/assets/04-python.jpg)
*Image by [Rubaitul Azad](https://unsplash.com/@rubaitulazad)*

Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. Known for its readability and simplicity, Python has become one of the most popular programming languages in the world. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python's design philosophy emphasizes code readability and the use of significant indentation. Python is one of the most popular programming language that being used in Data Science field. You can read more about python at https://www.python.org/.

## Python Installation

Installing Python on your computer is a straightforward process. Here are the steps for installing Python in general: 

1. **Download Python Installer:**
   - Visit the official [Python website](https://www.python.org/downloads/).
   - Click on the "Download Python" button. Ensure you download the latest version of Python.

2. **Run the Installer:**
   - Locate the downloaded installer file and run it.
   - In the installer, ensure you check the box that says "Add Python to PATH."
   - Click on "Install Now."

3. **Verify Installation:**
   - Open the Command Prompt / Terminal.
   - Type `python --version` and press Enter.
   - You should see the installed Python version displayed e.g `3.8.19`

Thats it! After that you can use your python to code! one way to code in python is use Integrated Development Environment (IDE).

## IDEs That Support Python

An Integrated Development Environment (IDE) can greatly enhance your Python programming experience rather than using native python interface in terminal / cmd. Here are some popular IDEs that support Python:

1. [**PyCharm**](https://www.jetbrains.com/pycharm/download/): developed by JetBrains, is a powerful IDE specifically designed for Python. It offers features like code analysis, a graphical debugger, an integrated unit tester, and support for web development with Django.

2. [**Visual Studio Code (VS Code)**](https://code.visualstudio.com/download) is a free, open-source code editor developed by Microsoft. It supports Python through extensions and offers features such as IntelliSense, debugging, and Git integration.

3. [**Jupyter Notebook**](https://jupyter.org/) is an open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative text. It is widely used in data science and academic research.

4. [**Spyder**](https://www.spyder-ide.org/) is an open-source IDE primarily designed for scientific programming in Python. It features a powerful editor, an interactive console, and tools for data analysis and visualization.

## Running Your First Program

on this occasion, I will use the IDE Visual Studio Code (VScode) and we will create a very simple program. This program will only display the words `Hello World` on the console.

1. We start by opening VScode, the appearance of VScode is more or less like the image below and click **New File** and choose **Python File**

![VScode Image](https://raw.githubusercontent.com/adiptamartulandi/learn-data-science-live/main/assets/04-01-vscode.png)
*Image by Author*

2. Then after that we can code! Let's write a simple program like the one below

```python
print("Hello, World!")
```

3. The code above is very simple, it only displays the words `Hello, World!` on the console. Let's try running the code!
4. To run the code we need to open `Terminal (mac)` or `Cmd (Windows)` on VScode. This can be done by clicking the `Terminal` option above then selecting `New Terminal`.
5. To run the program, save your python file and ranem to `hello.py` (you can rename to anything) and then type `python hello.py` in the Terminal/Cmd like the one below

![Run Program Image](https://raw.githubusercontent.com/adiptamartulandi/learn-data-science-live/main/assets/04-02-vscode.png)
*Image by Author*

6. Thats it! You have successfully run your first program!