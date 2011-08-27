#Slide 1
NULL

没内容

#Slide 2
Throughout 1960's and 1970's, most human interaction with computers was done
through what are called terminals. A terminal device is a piece of hardware
that combines the keyboard with some kind of character display, which in early
days in the 1960's was some kind of printer that print out characters line by
line. Or later in 1970's, it was usually a video console, but video console
was not capable of displaying arbitrary graphics, it can only display text
characters, and these text characters could only be displayed in a fixed grid.
Say, it wouldn't have arbitrarily positioned characters anywhere on the screen,
and also these devices only have one display font and one display color. 

在上个世纪六七十年代的时候，人机交互的主要手段是通过一种叫做“终端”的东西。终端是硬件，一般指的是一个键盘加上某种字符显示设备，最早在六十年代的时候都是打印机，一行一行的把字符打印出来。后来到了七十年代，演进成了“视频工作台“。但那时的”视频工作台”只能显示字符，不能像现在这样显示任意的图形。这些字符显示在固定的格子里，所以大小也是固定的，不像今天这样可以显示在任意的位置。那个时候一般就是：一种字体，一个颜色。

So the idea of terminal is that when they are hooked up to computer, the
computer then can send text characters and sequences to the terminal which get
displayed character by character on the screen and when the user sitting at
the keyboard types anything, a character sent from the terminal to the
computer, so does not need symmetry there. A strict sequence of characters
flows from computer to the terminal and vice versa. As you can probably guess,
the text going in both directions was almost always ASCII text.

所以终端总体上就是这么个东西，你把它连到计算机上，计算机就可以把文本（就是一个一个的字符）和序列（例如转意序列）送到终端，然后一个字符一个字符的显示出来；同样，当用户敲字的时候，这些字就从终端传给了计算机。这里也不需要对称同步，就是一串字符从计算机传到终端，或者反过来从终端传到计算机。可能大家能猜到，这些传来传去的数据基本都是ASCII字符。

#SLIDE 3
In Unix systems, a process may communicate with a terminal through a file
representing that terminal, a terminal character device file. When a process
writes to a terminal character device file, that is putting in data in the
output buffer of the device file which then going to to get sent out by the
operating system to the terminal device associated with that character device
file. Conversely, when the user at the keyboard types something, that data
get sent from the terminal to the computer and the operating system will take
that data and put it in the input buffer of the associated character device
file and then the process may read form the character device file to get that
data. So again, be clear the terminal is a totally dumb device. When you see
text displayed on the terminal that is something that coming from processes
running on the attached computer. 

在Unix系统下，一个进程可以通过一个代表特定终端的文件来和该终端通信，我们把这个文件叫做”终端字符设备文件“。当一个进程向一个终端字符设备文件写数据的时候，这些数据就被放到了设备文件的输出缓冲区里，操作系统继而会把这些数据送给相应的终端。反之，当用户用键盘输入数据时，操作系统会把数据放到相应设备文件的输入缓冲区内，这时相关的进程就可以从设备文件里读到这些数据了。注意，终端是没有什么智能的设备，当你看到终端上显示很多文本时，其实数据是来自与终端连接的那台计算机，数据是计算机上运行着的进程发过来的，终端只是起显示作用而已。

The only exception to this is that with the terminal character device file we
can turn on a mode called echo. When the terminal character device operates
in the echo mode, then any input received from the terminal was immediately
echo back out to the terminal so that is can be displayed on the screen. In
practice what this means when echo is on and the user types on the
keyboard, then whatever key they type, they will immediately see it appear on
their screen. Just be clear that the terminal doesn't have echo mode, it is
the terminal character device file has echo mode, so the data actually has
been sent from the terminal and immediately back to the terminal.

不过这里有个例外：我们可以把设备文件调成echo模式，这样每当终端读到输入数据时，会马上把这些数据发送回终端显示（这就好像“回音”），也就是说，当启用这个模式之后，用户在自己键盘上敲什么，那她就会马上在自己的屏幕上看到什么。注意，是设备文件有echo模式，而不是终端本身有。所以应该说数据已经从终端发出去了（发到了设备文件），只是马上又“弹“回了终端。 

As the years went on, some terminals begin to add more features, like for
example, some terminals feature the ability to change text color, the way this
work is that you would set terminal's mode like, say, what color is printing,
by sending an escape sequence(that is, a sequence of characters beginning with
the ASCII escape character, which is ASCII code 27). By sending escape
sequences to the terminal, we can set its modes, and thereby change its
behaviors, like, say, what color text may be displayed, say, how many lines of
text get displayed on the screen, things like that.

后来，终端逐渐开始增加新功能。比如说显示带颜色的文本。工作原理是这样，我们发一个转意序列（以ASCII转意字符27开头的一串字符）给终端以改变它的工作模式，从而改变字符打印的颜色。当然，也可以改变显示的行数等等。

Now the trouble with this arrangement is that early on escape sequences were
not really standardized. Many manufactures did the wrong thing. So what you
need to do to control one terminal differs from what you do to control
another. In time though, eventually standards did more or less merge.
Unfortunately, the end result of this process ended up quite messy, so if you
look at the details of terminals and want to know what exactly you can do with
the escape codes, it is all surprisingly complicated. So that's a whole area
we're going to laid over. We will just think of terminals as simply displaying
a sequence of text, and sending back to the computer whatever gets typed at
the keyboard and end of story.

相应的问题是，早期各个厂商对转意序列没有一个统一的标准。所一在一种终端上使用转意序列的方法和另一终端上往往不同。虽然最终大家终于弄出一套标准，但这个标准其实也是乱七八糟。你可以自己学一下转意码，繁琐的很。所以在这里我们干脆就把转意抛开不管。我们就认为终端就是用来显示文本和发送文本到计算机的，这就足够了。

However I do mention these capabilities, because you will likely interact with
some programs that when they do use the terminal, they seem to do things that
are otherwise impossible, like say, changing the color of the text.

当然，我觉的提一提这些功能还是很有必要的，以后你很可能会遇到一些程序，它们会试图改变终端的文本颜色。

#SLIDE 4 
In Unix, we have this convention whereby processes when they are
started expect to inherit from their parent to open file descriptors, 0 and 1.
File descriptor 0, we call it standard in, abbreviated as stdin, and file
descriptor 1, we call it standard out, abbreviated as stdout. 

Unix系统下有这样一个传统，当一个进程开始时，它会从他的父进程继承文件描述符0和1。
我们把文件描述符0称为标准输入，简称stdin;把文件描述符1称为标准输出，简称stdout。

In the usual case, processes expect standard in to be a file descriptor open
for reading a terminal character device file and standard out is expected to
be open for writing that same terminal device file, 

通常，进程会从标准输入（stdin）来读取终端设备文件中的数据，而当进程想要向终端设备文件写数据时就会用到标准输出（stdout）。

In practice, what this means is that when a program wishes to read input from
the terminal, it reads from standard in, its file descriptor 0, and when a
program wish to display text on that same terminal it writes data to its
standard out.

在实际使用中这意味着，当进程想要从终端中读输入时，会读标准输入（文件描述符为0）；
而当进程要在同一个终端上显示文本时，它就会把数据写到标准输出上。

#SLIDE 5 
Now be clear, this is what processes expect to inherit from their
parent. We call that when a process forks in Unix, the file descriptors from
the parent will be copied to the child, so has all the same open file
descriptors. So the convention in Unix is that when program wish to interact
with terminal, they usually don't locate a appropriate terminal themselves,
they just expect to inherit these file descriptors already open to a
appropriate terminal. 

注意，如图所示的就是进程要向它的父进程继承什么。一般我们把这个继承过程叫做一个fork.
那么fork进程就意味着父进程的文件描述符会被直接拷贝到子进程，那自然的，子进程就拥有了和父进程相同的那些文件描述符。当程序想要和终端交互时，一般不用自行定位一个终端，因为它们会从父进程继承到文件描述符（其中当然也包括0和1），这些描述符本身就已经指向了特定终端。

Now you maybe wondering why do we have two separate file descriptors, one for
reading, one for writing.  First off something I did not explicitly mention in
the coverage of Unix System calls is that when you open a file you can open in
a mode such that only reading is allowed, or only writing is allowed, that is
possible. Still that doesn't explain why we have two separate file
descriptors, when we could just get away with one for both reading and
writing. This is something we will be explaining a bit later when we talk
about what's called redirection.

你现在可能感觉很奇怪，为什么我们会有两个文件描述符，一个用来读，一个用于写。当初我在讲Unix系统调用的时候没有提到的一点是，文件打开是可以设置模式为只读，或是只写。当然，这样也不足以说明明明我们可以用一个描述符，既读又写，为什么偏偏却非要有两个呢。后续，我们在降到重定向（redirection)的时候，会对此做进一步的说明。

#SLIDE 6 
Something else you maybe wondering at this point is that, hey, my
computer doesn't have a terminal...
