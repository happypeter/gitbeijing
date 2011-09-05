#SLIDE 1(00:00-02:12)
You should be absolutely clear at this point that a terminal is just a dumb
device for displaying text characters on the screen, and for sending text
characters from the keyboard to a program that wishes to read them.  Without
programs reading from terminal and writing to it. Terminals are pointless.

What we call a shell in Unix is a program which reads from a terminal and then
interpret what user entered as a command and executes that command. 

Effectively a shell is an interpreter for a programming language, it is just
the expectation of the shell  that the user typing the lines of code one by
one, and each time they enter a line of code the shell then immediately
executes it. So we can see a shell is like an interactive programming
language, The user types a command, and then the shell immediately executes
that command.

For many years the most widely  used shell on Unix systems was known just as
sh, for shell, but more formally known as the B shell, because it was created
by a guy named Steven B. For the most part, all the other shells have been
used at one point or another that are listed here are really just variations
on the original B shell. Most of them takes the core of B shell and just takes
in the additional features.

Perhaps the one exception here is the csh which changes a few things about the
syntax of the  of the original B shell, as well as adding additional features.
The Ksh for example is so called because it is created by a guy named David
Korn, was created a few years after the B shell and mostly adds things rather
than changing anything about the core shell syntax and features. Of all the
shells listed here, the one you need to become most familiar with and the one
we are going to focus on is Bash( aka the B again Shell)

Bash was created in the late 80s by a GUN project and so it got adapted as the
effectively default  shell in Linux systems.  So in fact, most of the time you
open up a terminal window on a Linux system it will  most likely by default
have the bash shell running in it.

Again bash shell is pretty much just the a extension of the original B shell.
I do not believe there is actually anything that they changed about the
original shell, they just added more features. 

#SLIDE 2(02:12-04:40)
So say I boot up my Ubuntu system and the X window server then starts and
finally my whole graphical desktop there is loaded and ready to go. If I then
open a terminal program I will get this terminal emulator window, and in it is
running the bash shell because that is the default on ubuntu systems.  And as
you see here, what I am presented with is first a prompt, and the prompt
displays my user name followed by the name of the system, which here is just
happens to be ubuntu I suppose, that is then followed by colon after which is
listed the path of the current working directory of the shell. Recall that
every process in Unix has associated with it a current working directory is
sometimes called the process working directory. 

In this case as listed as tilde, because in Bash syntax and sh syntax, tilde
is used as special signifier, a special shorthand for my home directory , so
really what should be printed here is /home/brian and this is just a shorthand
. We will talk more about the special meaning of tilde a bit later. And in
this case so after listing the current working directory, there is a $ sign
which simply denotes the end of the prompt. 

And then after the prompt there is a space and my text cursor where if I start
typing, that is where my text is going to start appearing. Because when the
shell is waiting for you to enter command, it puts the terminal into the
echoin mode. 

So now I can type a command and as I type it the characters will appear in the
terminal, and once I hit enter the shell usually interprets the newline
character as the end of a command. So it will then interpret that command and
execute it. 

Before getting in to the details of bash syntax and semantics, also remark
here that shell languages have what I like to call a command based syntax and
semantics, in contrast to the expression based syntax languages we've seen in
languages like Java script python. This stems from a very different design
goal. Shells are mainly about not writing whole bunch of code that runs with
the shell, but writing code that simply launches other programs.

So while it is perfectly possible in say, python to launch other programs, it
is not made specially convenient, because python is mainly about writing code
to run directly in the python interpreter, not to run as separate processes.
Whereas in shell, mainly what is about is running other  programs. 

#SLIDE 3(04:40-
So the difference of purpose  is what explain the reason  behind the syntax
for the basic kind of the command what I call the process command.
