const Courses = [
  {
    id: '1',
    title: 'Software Engineering',
    image: require('../assets/course1.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor ante dui, sed ornare augue porta id. Curabitur molestie a diam in malesuada. Vivamus rhoncus mi accumsan, viverra sem nec, mattis elit.',
    course1: '1) Introduction to SE',
    course2: '2) Software Development Lifecycle',
    course3: '3) Testing',
    price: 1000,
  },
  {
    id: '2',
    title: 'Artificial Intelligence',
    image: require('../assets/course2.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor ante dui, sed ornare augue porta id. Curabitur molestie a diam in malesuada. Vivamus rhoncus mi accumsan, viverra sem nec, mattis elit.',
    course1: 'html',
    price: 1000,
  },
  {
    id: '3',
    title: 'Machine Learning',
    image: require('../assets/course3.jpg'),
    description: 'Machine learning (ML) is an umbrella term for solving problems for which development of algorithms by human programmers would be cost-prohibitive, and instead the problems are solved by helping machines',
    course1: 'Modern-day machine learning has two objectives, one is to classify data based on models which have been developed, the other purpose is to make predictions for future outcomes based on these models. A hypothetical algorithm specific to classifying data may use computer vision of moles coupled with supervised learning in order to train it to classify the cancerous moles. A machine learning algorithm for stock trading may inform the trader of future potential predictions. Performing machine learning can involve creating a model, which is trained on some training data and then can process additional data to make predictions. Various types of models have been used and researched for machine learning systems.',
    price: 1000,
  },
  {
    id: '4',
    title: 'Data Structures and Algorithm',
    image: require('../assets/course4.jpg'),
    description:
      'Data structure is a data organization, management, and storage format that is usually chosen for efficient access to data. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data, it is an algebraic structure about data.',
    course1: 'Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory, specified by a pointer—a bit string, representing a memory address, that can be itself stored in memory and manipulated by the program. Thus, the array and record data structures are based on computing the addresses of data items with arithmetic operations, while the linked data structures are based on storing addresses of data items within the structure itself. Data structures serve as the basis for abstract data types (ADT). The ADT defines the logical form of the data type. The data structure implements the physical form of the data type.Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks. For example, relational databases commonly use B-tree indexes for data retrieval, while compiler implementations usually use hash tables to look up identifiers.',
    price: 1000,
  },
  {
    id: '5',
    title: 'Web Development',
    image: require('../assets/course5.png'),
    description:
      'Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.',
    course1: 'Web development is the process of building websites and applications for the internet, or for a private network known as an intranet.Web development can be broken down into three layers: client-side coding (frontend), server-side coding (backend) and database technology.Client-side scripting, or frontend development, refers to everything that the end user experiences directly.Server-side scripting, or backend development, is all about what goes on behind the scenes.The backend is essentially the part of a website that the user doesn’t actually see. It is responsible for storing and organizing data, and ensuring that everything on the client-side runs smoothly. It does this by communicating with the frontend.The database contains all the files and content that are necessary for a website to function, storing it in such a way that makes it easy to retrieve, organize, edit, and save.',
    price: 1000,
  },
]

export default Courses
