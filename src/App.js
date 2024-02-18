import { useState } from "react";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false);
  
  const check_true=()=>{
    const checkId = document.getElementById('checkId');
    let inputs = document.querySelectorAll('.checkbox');
    if(checkId){
      const mastercheckbox = checkId.checked;
      inputs.forEach((i)=>{
        i.checked = mastercheckbox;
      });
      setCheck(mastercheckbox);
    }
  }
  return (
    <div className="bg-blue">
      <div className="container">
        <header className="d-flex align-items-center justify-content-between py-3">
          <h3>orders</h3>
          <button className="btn btn-color">CREATE NEW</button>
        </header>
        <section className="mt-4 bg-white border shadow-sm bg-body-tertiary rounded p-3">
          <div className="row">
            <div className="col-md-5">
              <h6>what are you looking for?</h6>
              <div className="d-flex align-items-center border px-3 rounded">
                <i class="bx bx-search"></i>
                <input
                  className="w-100 text-start input-group-text border-0"
                  type="text"
                  placeholder="Search for category, name, company, etc"
                />
              </div>
            </div>
            <div className="col-md-2">
              <h6>category</h6>
              <select name="" id="" className="w-100 form-select">
                <option value="All" selected>
                  All
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="col-md-2">
              <h6>Status</h6>
              <select name="" id="" className="w-100 form-select">
                <option value="All" selected>
                  All
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="col-md-3 mt-2 d-flex align-items-center justify-content-around">
              <div className="border p-2 rounded">
                <i class="bx bxs-chevrons-down fs-4"></i>
              </div>
              <div className="btn btn-color">SEARCH</div>
            </div>
          </div>
        </section>
        <section className="mt-4 bg-white border shadow-sm bg-body-tertiary rounded p-3">
          <div className="row">
            <div className="col-md-4">
              <h5>Product Summary</h5>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-between">
              <span>Show</span>
              <select name="" id="" className="w-100 form-select fw-medium">
                <option value="All" selected>
                  ALL COLUMN
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="col-md-2 col-sm-4 my-3">
              <button className="btn btn-color w-100">DISPATCH SELECTED</button>
            </div>
            <div className="col-md-3 col-sm-8 text-center d-flex align-items-center justify-content-around">
              <button className="btn btn-set p-2">{"<"}</button>
              <button className="btn btn-set p-2">1</button>
              <button className="btn btn-set p-2">2</button>
              <button className="btn btn-set p-2 active">3</button>
              <span>....</span>
              <button className="btn btn-set p-2">10</button>
              <button className="btn btn-set p-2">{">"}</button>
            </div>
          </div>
          <div className="row my-4 overflow-auto">
            <table>
              <thead class="bg-blue w-100 h-100">
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox"  onChange={check_true} id="checkId"/></td>
                  <td>ID</td>
                  <td>SHOPIFY&nbsp;#</td>
                  <td>DATE</td>
                  <td>STATUS</td>
                  <td>CUSTOMER</td>
                  <td>EMAIL</td>
                  <td>COUNTRY</td>
                  <td>SHIPPING</td>
                  <td>SOURCE</td>
                  <td>ORDER&nbsp;TYPE</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox"/></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
                <tr>
                  <td><input class="form-check-input checkbox" type="checkbox" /></td>
                  <td>1077620</td>
                  <td>17713</td>
                  <td>20 Jan 2020</td>
                  <td>Pending</td>
                  <td>Ahmed</td>
                  <td>ahmed.123@mail.com</td>
                  <td>Australia</td>
                  <td>Australian Post Api</td>
                  <td>ShopifyAU</td>
                  <td>Customer</td>
                  <td><i class='bx bx-edit'></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
