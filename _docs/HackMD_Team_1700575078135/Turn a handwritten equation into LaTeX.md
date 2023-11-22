# Turn a handwritten equation into LaTeX
![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F063E85ATNU/turn_handwritten_equation_into_code.png?pub_secret=e829f78a8b)


            prompt used: "turn a handwritten equation into code"

## description
AI tools like chatGPT can be used to turn handwritten math equations into a LaTex document. While previously we might not have been able to ask students to format their equations this way, using AI tools, it is now much easier for students to format their work in LaTeX. Instructors could also use this for creating polished versions of exam keys.

## activity
1. For this activity, we're going to use OpenAI's GPT 4 (rather than the HUIT Sandbox, since it doesn't currently have the ability to interpret images).
2. Upload the handwritten equation document.
3. Ask chatGPT to turn it into LaTeX.
    * you can then use this code to create a LaTeX formatted document.

---
## Transcript of activity example: 
* USER:
![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F062JGNDHAA/ps2_exam_page_scanned.png?pub_secret=de83a8ebdd)
* AI: 

```\documentclass{article}
\usepackage{amsmath}

\begin{document}

\section*{Problem 7 continued}

\subsection*{c) [10 pts]}
One of the loops of wire that detects the precessing spins in this MRI machine is located as shown in the figure at right, encircling the \(x\) axis and looping around the patient's left ear. This loop is observed to have the following time-varying current:
\[
i(t) = i_0 \cos(\omega t)
\]
(Consider the current to be positive when it flows clockwise, as shown in the diagram.) Given this observed current, find an expression for the magnetic flux through the loop, \(\Phi_B(t)\), as a function of time. Assume that the magnetic flux \(\Phi_B = 0\) at time \(t = 0\). The loop of wire has a resistance \(R\).

\begin{align*}
-\frac{d\Phi_B}{dt} &= \varepsilon_{\text{ind}} = IR \\
\int_{\Phi_{B0}}^{\Phi_B(t)} d\Phi_B &= - \int_0^t IR \, dt = -R \int_0^t i_0 \cos(\omega t) \, dt \\
\Phi_B(t) &= -\frac{R i_0}{\omega} \sin(\omega t)
\end{align*}

\subsection*{d) [5 pts]}
Which of the following could be true about the average magnetic field inside the loop at a time \textit{just after} \(t = 0\), i.e. for small positive values of \(t\)? (circle one)

\begin{enumerate}
    \item The field points in the +x direction, and its magnitude is increasing.
    \item The field points in the +x direction, and its magnitude is decreasing.
    \item The field points in the -x direction, and its magnitude is increasing.
    \item The field points in the -x direction, and its magnitude is decreasing.
\end{enumerate}

\end{document}
