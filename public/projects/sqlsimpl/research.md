# SQLSimpl Project Proposal

## Introduction

This project proposal serves to introduce the interactive design project that I
plan to undertake within the INFO 3611: Designing for Interactivity course. This course
focuses on education and information design practices and principles related to user
interface and user experience design, which I have considered carefully while choosing
the subject matter for my project and the way I intend to approach development for the
project.

My chosen project will be a web-based, interactive, user-focused tutorial and
educational program on the beginner’s basics to setting up and using the MySQL
relational database software, for those who wish to learn but have no experience with
SQL or those who are intimidated by or otherwise dissatisfied with the current
programming courses offered for learning SQL. The interface and communication of
the project deliverables will feature human-friendly design elements and casual
language to maximize inclusivity and learning retention among the selected user base.
Usability will be the guiding focus of the development of content within the project
deliverables.

This proposal will be broken into sections, with each section highlighting a
different element of the project and how I plan to undertake this project. These
sections include, in order:

1. Project and project proposal brief introduction (this section)
2. Description of the problem that the project intends to solve, with user group analysis and secondary research examples
3. Detailed project deliverables description, including:
    a. instructional design model research
    b. layout of planned features and implementations
    c. example of a potential project tech stack
    d. explanation of the product’s interactivity and UX design proposal
    e. description of how the intended project serves to help alleviate the issue for the explored user group, including project hypothesis
4. Project proposal brief conclusion
5. References

By the end of this project proposal document, the reader should be able to fully
understand the problem I tend to address and how I tend to address them through a
digital and interactive design intervention.

## Problem Description

As someone who has learned different programming languages before, both
through self-education and through post-secondary level courses, I can vouch that the
process can be somewhat intimidating, especially when first starting. My educational
background resides within the IT and telecommunications space, so I am fairly well
versed in general technical knowledge when it comes to computers and networks.

However, I recognize that not everyone has the same technical background as myself
but would like to expand their thinking within technical and programming disciplines.
According to W3Schools (n.d. a), MySQL is a relational database management
software that is used by many different organizations and web developers for storing,
retrieving, and manipulating data to serve our interconnected world (“What is
MySQL?”, “Who uses MySQL?”). Users can setup the MySQL program onto various
platforms or servers, where they can perform flexible and complex data queries to
retrieve a selection of rows within a relational table filled with data (W3Schools, n.d.,
“What is MySQL?”). Essentially, W3Schools (n.d. b) states that SQL is a querying
language that allows a user to retrieve a particular range of data from a “spreadsheetlike”
data table (“What is RDBMS?”). People may associate it with being a
programming language, which I think may be misleading as, even though it looks like
one and has similar features, it is only a querying language far less complex than
programming languages such as C or Python.

To the reader, this explanation of MySQL above may be complex, and this is a
good example of the problem I wish to analyze and solve through this project.
Considering how important MySQL is to many different backend and organizational
facets of the internet and our digital world, I reasoned it might be a good topic for
people to gain general knowledge of without requiring too much effort. By that end, I
want my project to examine and attempt to solve the problem statement of:
“How can MySQL theory and practice be taught to those with limited or no
technical knowledge, who may find learning programming or querying languages
intimidating?”

To support my problem statement and prove that this is a problem that people
are actually facing in the current day, I have compiled statements from different forum
and Reddit users online to form a rudimentary user group analysis, that shows proof
that learning MySQL is something people do struggle with in this day and age and that
making an effort to learn is still incredibly worthwhile, for different reasons.

I believe Reddit, and other online forums, are a good place to start when looking
for different real-world experiences and problems, such as people’s frustrations and
solutions to learning MySQL, a few of which I’ll show some examples of. User
Marchesa_Corsiglia (2023) states that they tried learning via Microsoft’s Access SQL
but they had difficulty learning and remembering any key concepts and would rather
learn SQL in a simpler format, such as tutorial videos (“Trying to learn MySQL”).
Another user, Ever_Searching_R101 (2021), seemed unsure and intimidated about
learning MySQL, as someone with very little technical knowledge beyond basic HTML
skills, who was reassured by their fellow Redditors that MySQL is a very simple, easy
to learn, and incredibly useful querying language (“How hard to learn SQL from
scratch?”). User JY-HRL (2024) posts about their frustrations with MySQL, saying that
even though they have previous knowledge in PHP (another programming language for
web design), they struggle with use MySQL and dealing with constant querying errors,
which hinders their learning progression, to which some replying users actually agreed
with them, stating that MySQL involves a steep learning curve but that the job
opportunities are worth the struggle (“Why is MySQL so difficult to use?”).

Outside of Reddit, I have found some users on other technical forums, such as
Stack Overflow, expressing similar frustrations and anxieties within their attempts to
learn MySQL. A user named Youssef (2023) expressed their frustration on the official
MySQL documentation, showing an example of how they found the explanation of a
function unclear, which definitely shows a good example of how sometimes, even the
official documentation can be difficult to use while learning (“MySQL official
documentation unclear”). On SQLServerCentral, user julunyeti (2023) expressed some
concerns about learning SQL with no prior programming experience, to which they
were reassured by fellow forum users stating that many free resources and support are
available for learning and that prior knowledge is helpful, but not necessary to start
learning SQL (“No experience with programming; how difficult is SQL for new
prospect?”). Additionally, Miedema et al. (2021) notes that learning MySQL among
students was an especially challenging process for them and introduced many
misconceptions, especially involving what kind of prior knowledge was involved and
connecting a mental model to the practice of a real SQL database (“What is it about?”).

Additionally, other motivators to learn MySQL exist that could serve my problem
statement as a reason for why those with no prior experience might want to pick up
learning MySQL. Redditor LSD_at_the_Dentist (2022) asks, in a Reddit post, if SQL is
worth learning and still relevant today, to which the responses from other users were
overwhelmingly yes, for both questions (“how relevant is SQL? is it worth learning?”).
The Redditor (2022) saw responses that reaffirmed them that SQL is used in many
databases almost universally and lots of websites on the internet, used by large
companies and organizations, are still based on SQL, making it extremely valuable to
learn (“how relevant is SQL? is it worth learning?”). On top of this, Thorndyke (2021),
writing for Code Academy, states that web developers, back-end developers, data
scientists, and even those working in a non-technical field, all benefit from knowing
SQL, as lots of the querying theory and practices used by SQL can transfer over into
the fields of finance or analytics (“Who should learn SQL?”).

Wrapping this section up, based on the concerns and opinions of many online
forum users, as well as journal and news articles, it is clear that MySQL can be a very
challenging or intimidating language for those who do not know where to start. The
need for a user-focused, easy to follow program for learning the basics of MySQL,
from the very start of installing the software, would be beneficial and could help
address this valid concern that those who wish to learn have.

## Project Deliverables Description

The project I intend to take on that addresses the problem from earlier will take
on the form of an interactive, guided web-based application that shows the user the
basics of MySQL, including relational database theory, the history of MySQL, how to
install and use the software effectively, and how to create, manipulate, and query data
using SQL from a relational table. Every topic within the scope of this basic
introduction to MySQL will be approached from a user-first, interactive perspective,
with a priority being placed on asking “how can we make this learning function
interactive and easy for the user to understand?”. This approach is being taken in an
effort to improve information retention within the userbase, as well as make a
somewhat intimidating and complex technical topic approachable and fun to learn.
Of course, some scholarly research has been performed to support why and
how I intend to approach learning MySQL in an interactive way. 

Van Merrienboer & Krammer (1987) introduce the Reading approach for teaching high-school students the
basics of computer programming and technical literacy skills, which involves gradually
introducing students to procedural programming problem questions, along with
associated readings on the potential solutions beforehand, that gradually get more
complex and independent as the course progresses, “changing from using and
analyzing programs, through modifying and extending programs, to designing and
coding programs” (p. 276). They (1987) further elaborate that, out of three approaches
to instructional design, the Reading approach achieved the best overall results based
on a case study they performed, involving 6 different programming and literacy topics
taught in the case study (pp. 278-279). This study clearly shows that the Reading
approach to learning a new programming language (which we will consider SQL for the
time being) is quite effective and could be a valid approach to how I design the
instruction for my project deliverables.

In another study, Harper & Hedberg (1997) write on the instructional design topic
of “constructivism” and why interactive learning exhibits can motivate learners and
how they can be created as such (“Abstract”). They (1997) argue that the software
platform, on which a learner experiences an interactive educational lesson from, takes
the role of a teacher within a real-life classroom setting and that, “What they learn and
how widely they use that knowledge, skill or strategy is a function of the context of
program use- the learner extracts from a program what sense they make of it, not what
use the designer intended” (“Developing Technology-Supported Constructivist
Environments”). This argument provides guidance as to how I might be able to
structure a similar web-based platform for learning MySQL. Additionally, Harper &
Hedberg’s (1997) suggestion in this article that a “problem-based learning” approach
allows a student to learn more effectively by giving them a problem to solve and letting
them solve it on their own using prior knowledge, rather than showing and telling them
how to solve the same problem, offering a strategy to apply to interactive design that
“motivate learners and generate high quality learning outcomes” (“Problem-based
Learning as a Framework”).

Lastly, examining articles focusing specifically on MySQL instruction, Cagliero et
al. (2018) describe SQLator, a theoretical, similar web-based tool for teaching SQL to
university students, which focused on ease of learning by providing students with
targeted hints to help them learn from errors while solving problems (“Section III:
Related Work”), showing that a web-based interface can be a viable and effective
platform for learning skills specifically suited to MySQL, due to their discussion of the
SQLator tool and how it can be used effectively to analyze problem responses
heuristically to score students.

Based on these three studies examining different approaches to teaching
programming literacy, I have decided to structure my interactive design intervention
from this project into two separate sections: a guided reading/walk-through suite,
which introduces and lectures to the user different theory topics and instructions on
how to perform queries, commands, and other supporting actions, like installing a
program, alongside a problem practice section, which is directly intertwined with each
topic taught by the reading/walk-through section, where users can access quizzes and
problems based on the topics they learn, as well as hints and solutions to help them
solve these problems. I plan to package this within a web-based application
environment, allowing for ease of access for those on any platform (desktop or mobile),
making the deliverable inclusive and easy-to-navigate.

For both sections, I plan to develop a structured set of “modules”, with each module introducing a set of related
topics and practices related to SQL. These modules will be introduced in order of
difficulty based on my own experiences learning SQL while I was a data science and
BCIS student here at Mount Royal University. I will make these modules accessible to
users in any order they want to approach, allowing them to choose what approach fits
their method of knowledge retention the best. Additionally, I will be setting a “hardstop”
scope for the materials covered within this project, covering only the basics skills
and theory needed to understand MySQL and effectively query basic data from a
relational table, simply due to the time constraints of the project within INFO 3611.
I firmly believe the above structured approach to designing the instruction of the
deliverable demonstrates a combination of the three studies mentioned earlier and
some of their findings.

For the tech stack involved, I am basing this on the scope of the project, the
requirements of a minimum viable product, as well as my own knowledge of how to
effectively program a simple web application using Hyper Text Markup Language
(HTML), Cascading Style Sheets (CSS), and vanilla JavaScript (JS). The HTML will
serve as the container and backbone of the project, structuring the user’s view of the
webpage and serving as the container for the CSS style code and JS functionality
code. CSS will allow me to adjust the styling and visual appearance of the user
interface within the web app, while JS will be used in the backend to ensure the
functionality of quiz answer checking and navigation.

Making this project interactive will be an interesting challenge. The project
deliverables will focus on delivering all instructional content within both sections within
a heavily interactive format. I plan to use the skills I have learned as an Information
Design student to design a user interface that is simple, clean, and enjoyable to use by
any user. Keeping the user interface (UI) clean, free of cluttering symbols or images,
using light colours for background elements and darker ones for important foreground
elements, and paying close attention to which elements are the most pertinent for the
user to be aware of at any time are general good practices for UI design, based on
previous knowledge as a student at MRU. Additionally, I will also be paying close
attention to how text is used within the UI. Keeping text to a minimum that only
necessary for the core features to be understood by a user is paramount, as well as
choosing a clean, sans-serif typeface within a usable font size, are also all good
general practices I have learned within the practice of Info Design. Lastly, I will also be
carefully choosing the phrasing and technical dialogue 

Taking this plan and product layout into account, I hypothesize that this
project’s final deliverable will be able to solve the issues that come with teaching
MySQL to those with minimal technical knowledge and taking that first step into
learning that many feel afraid of.

By making the experience interactive, as Harper & Hedberg (1997) state
(“Abstract”, “Developing Technology-Supported Constructivist Environments”), the
quality of learning and knowledge retained by the learner improves drastically. This will
be the driving force behind my study of interactive design and how it can be applied to
instructional design theory to help those who struggle with learning complex technical
topics succeed.

## Conclusion

Choosing to approach a topic that I feel very well-versed in, such as SQL,
through the lens of educating others, will provide a great outlet for me to practice my
interactive design and UX/UI skills. Such skills seem to be growing more important
within the Information Designer’s toolkit, based on the industry and job postings that I
have observed as a student. By the end of this project, I hope to have a deliverable
that I can present proudly to my fellow classmates, demonstrate my technical
proficiency in interactive design on my portfolio, as well as allow others to use
someday in the hopes of making SQL fun and fulfilling to learn!

## References

Cagliero, L., De Russis, L., Farinetti, L., Montanaro, T. (2018). Improving the
Effectiveness of SQL Learning Practice: A Data-Driven Approach. 2018 IEEE
42nd Annual Computer Software and Applications Conference (COMPSAC),
980-989. doi: 10.1109/COMPSAC.2018.00174.
https://ieeexplore.ieee.org/abstract/document/8377799?casa_token=0JdWQD_LzOEAAAAA:EXUSN8shMkV-CdJeRXBWKoqdkDWjGZJBSa1lwQcejYTn_ktNUz3Y2JM_RmwDHOATAElfMfOtAlZ

Ever_Searching_R101. (2021). How hard to learn SQL from scratch? [Online forum
post]. Reddit.
https://www.reddit.com/r/SQL/comments/l8i4xx/how_hard_to_learn_sql_from_scratch/

Harper, B., Hedberg, J. (1997). Creating Motivating Interactive Learning Environments:
a Constructivist View. Australian Society for Computers in Learning in Tertiary
Education.
https://www.ascilite.org/conferences/perth97/papers/Harper/Harper.html

julunyeti. (2023). No experience with programming; how difficult is SQL for new
prospect? [Online forum post]. SQLServerCentral.
https://www.sqlservercentral.com/forums/topic/no-experience-withprogramming-how-difficult-is-sql-for-new-prospect-4

JY-HRL. (2024). Why is MySQL so difficult to use? [Online forum post]. Reddit.
https://www.reddit.com/r/DatabaseHelp/comments/1aowrxi/why_is_mysql_so_difficult_to_use/

LSD_at_the_Dentist. (2022). how relevant is SQL? is it worth learning? [Online forum
post]. Reddit.
https://www.reddit.com/r/learnprogramming/comments/v5aaio/how_relevant_is_sql_is_it_worth_learning/

Marchesa_Corsiglia. (2023). Trying to learn MySQL [Online forum post]. Reddit.
https://www.reddit.com/r/Database/comments/178jmfk/trying_to_learn_mysql/

Miedema, D., Aivaloglou, E., Fletcher, G. (2021). Challenges students face when
learning to work with relational databases and SQL. Association for Computing
Machinery [summarized by Kudos].
https://www.growkudos.com/publications/10.1145%25252F3446871.3469759/reader

Thorndyke, K. (2021). Should I Learn SQL?. Code Academy.
https://www.codecademy.com/resources/blog/should-i-learn-sql/

Van Merrienboer, J.J.G., Krammer, H.P.M. (1987). Instructional strategies and tactics
for the design of introductory computer programming courses in high school.
Instr Sci 16, 251–285 (1987). https://doi.org/10.1007/BF00120253

W3Schools. (n.d.). Introduction to MySQL.
https://www.w3schools.com/mysql/mysql_intro.asp

W3Schools. (n.d.). MySQL RDBMS.
https://www.w3schools.com/mysql/mysql_rdbms.asp

Youssef. (2023). MySQL official documentation unclear [Online forum post]. Stack
Overflow. https://stackoverflow.com/questions/76963915/mysql-officialdocumentation-unclear