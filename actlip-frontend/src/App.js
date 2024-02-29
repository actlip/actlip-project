import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";
import Alert from "./components/alert/Alert";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import AboutUs from "./pages/about-us";
import NewsAndArticles from "./pages/news-and-articles";
import ContactUs from "./pages/contact-us";
import PolicyTracker from "./pages/policy-tracker";
import Projects from "./pages/projects";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import News from "./pages/news";
import axios from "axios";
import StatusModal from "./components/StatusModal";
import { refreshToken } from "./redux/actions/authAction";
import { getPosts } from "./redux/actions/postAction";

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await axios.get(
          `https://actlip.onrender.com/api/news?limit=${limit}&page=${page}`
        );
        setData([...data, ...response.data.posts]);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, [page, limit]);

  const [searchPosts, setSearchPosts] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchLoad, setSearchLoad] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setSearchLoad(true);
        const response = await axios.get(
          `https://actlip.onrender.com/api/search?head=${searchPosts}`
        );
        setPosts(response.data.posts);
        setSearchLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setSearchLoad(false);
      }
    };

    fetchPost();
  }, [searchPosts]);

  const { auth, status, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
   
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
    }
  }, [dispatch, auth.token]);
  return (
    <Router>
      {auth.token ? (
        ""
      ) : (
        <Navbar className="z-40" show={show} setShow={setShow} />
      )}
      <div className={show ? `font-poppins hidden xl:inline` : ` font-poppins`}>
        <Route exact path="/login" component={auth.token ? Dashboard : Login} />
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} posts={posts} />}
        />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/policy-tracker" component={PolicyTracker} />
        <Route exact path="/contact-us" component={ContactUs} />

        <Route
          exact
          path="/news-and-articles"
          render={(props) => (
            <NewsAndArticles
              {...props}
              setPage={setPage}
              page={page}
              data={data}
              load={load}
              totalPages={totalPages}
              setSearchPosts={setSearchPosts}
              posts={posts}
              searchLoad={searchLoad}
              searchPosts={searchPosts}
            />
          )}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/news-and-articles/:id" component={News} />
        {auth.token ? "" : <Footer show2={show2} setShow2={setShow2} />}
      </div>

      <Alert />

      <div className={`App ${(status || modal) && "mode"}`}>
        <div className="main font-poppins">
          {status && <StatusModal />}

          <div style={{}}>
            <PrivateRouter exact path="/login/:page" component={PageRender} />
            <PrivateRouter
              exact
              path="/login/:page/:id"
              component={PageRender}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
