import './Blog.css';
import BlogItem from './BlogItem';
import blog1Image from '../../assets/images/post-1.jpg';
import blog2Image from '../../assets/images/post-2.jpg';
import blog3Image from '../../assets/images/post-3.jpg';
function Blog(){
    let blogs = [
        {
            blogImage: blog1Image,
            blogTitle: 'post title 1',
            blogDesc: '(1)Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.',
            blogAuthor: 'Develope Coding',
            blogTime: '10 min'
        },
        {
            blogImage: blog2Image,
            blogTitle: 'post title 2',
            blogDesc: '(2)Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.',
            blogAuthor: 'Develope Coding',
            blogTime: '20 min'
        },
        {
            blogImage: blog3Image,
            blogTitle: 'post title 3',
            blogDesc: '(3)Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus. Praesent sapien massa, convallis a pellentesque nec,egestas non nisi.',
            blogAuthor: 'Develope Coding',
            blogTime: '30 min'
        },
    ]
    return (
        <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem {...blogs[0]}/>
          <BlogItem {...blogs[1]}/>
          <BlogItem {...blogs[2]}/>
        </div>
      </div>
    </section>
    );
}

export default Blog;