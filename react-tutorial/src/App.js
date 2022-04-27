import logo from './logo.svg';
import './App.css';
import Navbar from './WebPage/Navbar';
import Header from './WebPage/Header';
import PageContent from './WebPage/PageContent';
import Footer from './WebPage/Footer';
import SuppliersPage from './PropSample/SuppliersPage';
import StateSample2 from './StateSample2/StateSample2';
import StateSample3 from './StateSample3/StateSample3';
import EffectSample from './effectSample/EffectSample';
import ProductsPage from './categoryCRUD/ProductsPage';
import ProductsList from './categoryCRUD/ProductsList';
import 'antd/dist/antd.css'
import { Routes, Route, Link } from "react-router-dom";
import About from "./routerSample/About";
import Contact from "./routerSample/Contact";
import Home from "./routerSample/Home";
import NoMatch from "./routerSample/NoMatch";
import OrderDetail from "./routerSample/OrderDetail";
import Orders from "./routerSample/Orders";
import ProductTable from './routerSample/ProductTable'

function App() {
  return (
    <>

      <div>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link to='/'>Anasayfa</Link>
          <Link to='/hakkimizda'>Hakkımızda</Link>
          <Link to='/iletisim'>İletişim</Link>
          <Link to='/orders'>Siparişler</Link>
          <Link to='/orders/:id'>Orders Table</Link>
          <Link to='/productstable'>Products Table</Link>

        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hakkimizda' element={<About />}></Route>
        <Route path='/iletisim' element={<Contact />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/orders/:id' element={<OrderDetail />}></Route>
        <Route path='/productstable' element={<ProductTable></ProductTable>}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>

      {/* <OrderTable></OrderTable> */}

      {/* <ProductsPage></ProductsPage> */}

      {/* <EffectSample></EffectSample> */}

      { <StateSample3></StateSample3> }

      {/* <StateSample2></StateSample2> */}

      {/* <SuppliersPage></SuppliersPage> */}

      {/* <Navbar></Navbar>
  // <Header></Header>
  <PageContent></PageContent>
  <Footer></Footer> */}

    </>
  );
}

export default App;
