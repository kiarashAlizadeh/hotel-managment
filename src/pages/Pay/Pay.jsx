import "./bootstrap-rtl.min.css"
import "./novinMain.css"

import Swal from "sweetalert2"

import novinLogo from "../../assets/images/Pay/novinLogo.png"
import refresh from "../../assets/images/Pay/refresh.png"
import shaparaklogo from "../../assets/images/Pay/shaparaklogo.png"

function Pay() {
  let storedData = JSON.parse(localStorage.getItem("user-Data"))
  var userLogin = localStorage.getItem("user-Login")
  let currentUser = storedData.find((user) => user.name === userLogin)
  let userExistsIndex = storedData.findIndex((user) => user.name === userLogin)
  let lastReserve = currentUser.reserves[currentUser.reserves.length - 1]
  const price = lastReserve.price
  let isPayed = lastReserve.isPayed

  const name = storedData[userExistsIndex].name
  const family = storedData[userExistsIndex].family
  const fullName = name + " " + family

  let genderName = ""
  if (storedData[userExistsIndex].gender === "آقا") {
    genderName = " آقای" + " " + fullName
  } else {
    genderName = " خانم" + " " + fullName
  }
  const cancelHandler = () => {
    Swal.fire({
      title: "آیا از انصراف مطمعن هستید؟",
      text: "پس از انصراف به صفحه قبل منتقل می شوید!",
      icon: "error",
      confirmButtonText: "تایید",
      showCancelButton: "true",
      cancelButtonText: "لغو",
    }).then(function (isConfirm) {
      if (isConfirm.isConfirmed) {
        window.location.assign("/Confirmation")
      }
    })
  }
  const payHandler = () => {
    // const StoredData = (storedData[userExistsIndex].reserves[lastReserve].isPayed = "true")
    // localStorage.setItem("user-Data", JSON.stringify(StoredData))
    storedData[userExistsIndex].reserves[
      currentUser.reserves.length - 1
    ].isPayed = true

    localStorage.setItem("user-Data", JSON.stringify(storedData))
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
      },
    })
    Toast.fire({
      icon: "success",
      title: "پرداخت با موفقیت انجام شد!",
    })
    setTimeout(() => {
      window.location.assign("/Receipt")
    }, 2000)
  }
  return (
    <>
      <div className="lang-fa payment main-container">
        <button
          type="button"
          className="btn btn-link"
          style={{ visibility: "hidden" }}
          onclick="openMyModal1()"
          id="myBtn"
        >
          Open Modal
        </button>
        <div id="myModal1" className="modal1 modal-59">
          <div className="modal1-content">
            <div className="modal-header">
              <span className="close1">×</span>
              <p className="modal-title">توضیحات بیشتر</p>
            </div>
            <div className="modal-body">
              <p>
                1. اطمینان حاصل نمایید رمز پویای دریافتی را صحیح وارد نموده اید.
              </p>
              <p>
                2.مطمئن شوید مشخصات قید شده در پیامک رمز پویا با مشخصات تراکنش
                مورد درخواست شما مطابقت دارد.
              </p>
              <p>
                3. اطمینان حاصل نمایید رمز پویای استفاده شده ، با فشردن دکمه
                درخواست رمز در درگاه/ابزار پرداخت دیگری دریافت نشده باشد.
              </p>
              <p>
                4. چنانچه رمز پویا را از همین درگاه/ابزار پرداخت یا برنامک
                رمزساز خود دریافت نموده اید، از اصالت درگاه/ابزار پرداخت خود
                اطمینان حاصل نمایید.
              </p>
              <p>
                5. در غیر این صورت میتوانید دیگر مسائل یا مشکلات را از طریق تماس
                با یکی از مراکز ذیل پیگیری نمایید :
              </p>
              <div className="five paddingLeft5 paddingRight15">
                <p>الف)مرکز امداد بانک صادر کننده خود</p>
                <p>ب)مرکز امداد فراهم کننده خدمت پرداخت به شماره XXXXXX</p>
                <p>ج)مرکز تماس و امداد کاشف به شماره 91009960</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid popup DynamicPin">
          <div className="row popUpContainer">
            <div className="col-12">
              <div className="exception-info">
                <div className="row header">
                  <div className="col-12 title">
                    <span className="title">درخواست رمز پویا</span>
                  </div>
                  <div className="rr"></div>
                </div>
                <div
                  id="popup-info-body"
                  className="panel panel-primary pt-sm-2 pb-sm-2 pb-2 pt-2"
                >
                  <label
                    id="popupMsg"
                    className="popupMsg col-12 text-center"
                  ></label>
                  <p id="success-Desc" className="success-Desc">
                    مشتری گرامی ، درصورتی که از صحت اطلاعات واردشده اطمینان
                    دارید ولی هنوز رمز دوم پویای خود را دریافت ننموده اید مجددا
                    دکمه درخواست رمز پویا را بفشارید. در غیر اینصورت برای رفع
                    مشکل به بانک صادرکننده کارت خود مراجعه فرمایید
                  </p>
                  <div className="col-12 popup-btn text-center">
                    <button
                      id="popupBtnClose"
                      tabindex="0"
                      className="closes btn"
                      type="button"
                    >
                      متوجه شدم
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid popup card-info-delete">
          <div className="row popUpContainer">
            <div className="col-12">
              <div className="exception-info">
                <div className="row header">
                  <div className="col-12 title">
                    <span className="title">card info delete</span>
                  </div>
                  <div className="rr"></div>
                </div>
                <div
                  id="popup-info-body"
                  className="panel panel-primary pt-sm-2 pb-sm-2 pb-2 pt-2"
                >
                  <p id="success-Desc" className="success-Desc">
                    are you sure?
                  </p>
                  <div className="col-12 popup-btn text-center">
                    <button
                      id="popupBtnClose"
                      tabindex="0"
                      className="dontDelete btn"
                      type="button"
                    >
                      no
                    </button>
                  </div>
                  <div className="col-12 popup-btn text-center">
                    <button
                      id="popupBtnClose"
                      tabindex="0"
                      className="plzDelete btn"
                      type="button"
                    >
                      yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="container">
          <div className="row header">
            <div className="col-3 align-self-start shaparak-img">
              <img src={shaparaklogo} alt="shaparak" />
            </div>
            <div className="col-6 header-center align-self-end">
              <span>درگاه پرداخت اینترنتی</span>
              <br />
              <a href="http://www.pardakhtNovin.com">
                http://www.pardakhtNovin.com
              </a>
            </div>
            <div className="col col-3 align-self-start psp-img">
              <img src={novinLogo} alt="behpardakht" />
            </div>
          </div>
        </header>
        <div className="body pad-top-2p container">
          <div className="row">
            <div className="col-md-7 order-sm-1 order-1">
              <div className="card-info">
                <div id="card-info-header" className="row">
                  <label className="error-container"></label>
                  <div className="col-5 col-sm-5 title">
                    <span>اطلاعات کارت</span>
                  </div>
                  <div className="time-holder col-7 col-sm-7">
                    <span id="timer2" className="timerCounter float-left">
                      14:42
                    </span>
                    <span className="float-left">زمان باقی مانده</span>
                  </div>
                  <div className="ss"></div>
                </div>
                <div
                  id="card-info-body"
                  className="panel panel-primary pt-md-2"
                >
                  <form
                    className=""
                    method="post"
                    autocomplete="off"
                    onsubmit="return validateInputs(event);"
                  >
                    <input
                      id="dynamicInProgress"
                      type="hidden"
                      name="dynamicInProgress"
                      value=""
                    />
                    <div className="row form-group">
                      <label className="col-12 col-sm-4 col-form-label panLabel">
                        شماره کارت <span className="star">*</span>
                        <span className="pan-error">
                          شماره کارت نامعتبر است
                        </span>
                      </label>
                      <div className="col-12 col-sm-8">
                        <div className="card-parent dropdown">
                          <input
                            type="tel"
                            name="pan"
                            className="form-control border-rd-numpad text-center"
                            id="pan"
                            autocomplete="new-password"
                            placeholder="شماره کارت"
                            tabindex="1"
                            maxlength="19"
                            onkeyup="focusOnNextField(this,event);"
                            onkeydown="panChanged();putPanSeprator(event);"
                            onkeypress="return validChar(event);"
                            value=""
                          />
                          <input
                            type="hidden"
                            name="panIsNull"
                            id="panIsNull"
                            value="false"
                          />
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            id="card-combo-btn"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="falnose"
                          ></button>
                          <input
                            type="hidden"
                            name="cardHolderId"
                            id="cardHolderId"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label
                        className="col-12 col-sm-4 col-form-label"
                        style={{ paddingLeft: "0" }}
                      >
                        شماره شناسایی دوم
                        <span style={{ fontSize: "13px" }}>(cvv2)</span>
                        <span className="star">*</span>
                        <span className="cvv2-error">طول cvv2 نامعتبر است</span>
                      </label>
                      <div className="col-12 col-sm-8">
                        <div className="card-parent">
                          <input
                            name="cvv2"
                            type="password"
                            min="0"
                            pattern="[0-9]*"
                            inputmode="numeric"
                            onkeypress="return validChar(event);"
                            className="form-control border-rd-numpad text-center"
                            id="cvv2"
                            placeholder="شماره ۳ یا ۴ رقمی پشت کارت"
                            tabindex="2"
                            maxlength="4"
                            minlength="3"
                            onfocus="$(&#39;.showCvv2Numpad&#39;).css(&#39;display&#39;, &#39;flex&#39;);"
                            onkeyup="focusOnNextField(this,event);"
                          />
                          <button
                            type="button"
                            id="cvv2-numpad-btn"
                            onclick="showCvv2Numpad();"
                            aria-haspopup="true"
                            tabindex="-1"
                          ></button>
                        </div>
                        <div
                          id="cvv2Numpad"
                          className="numpad-container showCvv2Numpad"
                        >
                          <div className="virtual-numpad">
                            <button
                              id="btn2"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="2"
                            >
                              2
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn7"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="7"
                            >
                              7
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn8"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="8"
                            >
                              8
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn3"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="3"
                            >
                              3
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn9"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="9"
                            >
                              9
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn1"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="1"
                            >
                              1
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn4"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="4"
                            >
                              4
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn6"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="6"
                            >
                              6
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn5"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="5"
                            >
                              5
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="tab-key"
                              type="button"
                              className="numpad"
                              onclick="numpadDone(&#39;cvv2&#39;);"
                              style={{ color: "#27d286" }}
                            >
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn0"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;cvv2&#39;);"
                              value="0"
                            >
                              0
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="clear"
                              type="button"
                              className="numpad"
                              onclick="del(&#39;cvv2&#39;);"
                              style={{
                                color: "#e49c2f",
                                fontWeight: "900",
                                fontSize: "26px",
                              }}
                            >
                              <i
                                className="fa fa-arrow-left"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-12 col-sm-4 col-form-label dateLabel">
                        تاریخ انقضای کارت <span className="star">*</span>
                        <span className="date-error">
                          تاریخ انقضا نامعتبر است
                        </span>
                      </label>
                      <div className="col-2 d-lg-none d-sm-none"></div>
                      <div className="col-md-3 col-sm-3 col-4">
                        <input
                          type="tel"
                          name="expireMonth"
                          onkeypress="return validChar(event);"
                          className="form-control border-rd-no-numpad text-center"
                          tabindex="3"
                          id="inputmonth"
                          maxlength="2"
                          placeholder="ماه"
                          autocomplete="off"
                          onkeyup="focusOnNextField(this,event);"
                          value=""
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-4">
                        <input
                          type="tel"
                          name="expireYear"
                          onkeypress="return validChar(event);"
                          className="form-control border-rd-no-numpad text-center"
                          tabindex="4"
                          id="inputyear"
                          maxlength="2"
                          placeholder="سال"
                          autocomplete="off"
                          onkeyup="focusOnNextField(this,event)"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group row captcha-row">
                      <div className="col-12 col-sm-4 col-form-label dateLabel">
                        کد امنیتی
                      </div>
                      <div className="cap col-8 col-sm-3 mobile-justify">
                        <input
                          type="tel"
                          min="0"
                          pattern="[0-9]*"
                          onkeypress="return validChar(event);"
                          className="cap form-control border-rd-no-numpad text-center"
                          tabindex="5"
                          name="captchaAnswer"
                          id="captchaAnswer"
                          size="5"
                          maxlength="5"
                          autocomplete="off"
                          onkeyup="focusOnNextField(this,event)"
                        />
                      </div>
                      <div className="cap col-2 d-lg-none d-sm-none"></div>
                      <div className="cap col-2 d-lg-none d-sm-none"></div>
                      <div className="cap col-sm-3 col-6 capcha-container mobile-justify pt-sm-0 pt-2">
                        <img
                          name="captchaImg"
                          id="captchaImg"
                          className="captcha"
                          alt="کد امنیتی"
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <div className="cap col-sm-1 col-2 pt-sm-0 float-left pt-2">
                        <input
                          name="captchaKey"
                          id="captchaKey"
                          type="hidden"
                          value="+ampi4Rb9SDTaYxRHXFnNv24a2+Z3M7vAu91sw0QkUoS2mvcPRDLTLcdM+Z+UnjHlkU123yCBFAFB79Y+LlNcQ=="
                        />
                        <img
                          id="myimage"
                          className="refereshCaptcha"
                          onclick="loadCaptcha(&#39;https://pna.shaparak.ir/_ipgw_/NovinPspTemplate&#39;);return false;"
                          src={refresh}
                          alt="کد امنیتی"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-12 col-sm-4 col-form-label">
                        رمز دوم <span className="star">*</span>
                        <span className="pass-error">
                          طول رمز پویا نامعتبر است
                        </span>
                      </label>
                      <div className="col-12 col-sm-8">
                        <div className="card-parent">
                          <input
                            name="pin2"
                            type="password"
                            min="0"
                            pattern="[0-9]*"
                            inputmode="numeric"
                            className="form-control border-rd-numpad text-center"
                            tabindex="6"
                            id="pass"
                            placeholder="رمز دوم کارت"
                            maxlength="12"
                            minlength="5"
                            onfocus="$(&#39;.showPassNumpad&#39;).css(&#39;display&#39;, &#39;flex&#39;);"
                            onkeyup="focusOnNextField(this,event);"
                            onkeypress="return validChar(event);"
                          />
                          <button
                            type="button"
                            id="pass-numpad-btn"
                            onclick="showPassNumpad()"
                            aria-haspopup="true"
                            tabindex="-1"
                          ></button>
                          <button
                            type="button"
                            id="getDynamicPinbtn"
                            aria-haspopup="true"
                            tabindex="-1"
                            onclick="getDynamicPin(&#39;https://pna.shaparak.ir/_ipgw_//payment/getPin&#39;);"
                          >
                            درخواست رمز پویا
                          </button>
                        </div>
                        <div
                          id="passNumpad"
                          className="numpad-container showPassNumpad"
                        >
                          <div className="virtual-numpad">
                            <button
                              id="btn1"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="1"
                            >
                              1
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn8"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="8"
                            >
                              8
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn5"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="5"
                            >
                              5
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn0"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="0"
                            >
                              0
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn7"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="7"
                            >
                              7
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn2"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="2"
                            >
                              2
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn9"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="9"
                            >
                              9
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn6"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="6"
                            >
                              6
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn4"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="4"
                            >
                              4
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="tab-key"
                              type="button"
                              className="numpad"
                              onclick="numpadDone(&#39;pass&#39;);"
                              style={{ color: "#27d286" }}
                            >
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="btn3"
                              type="button"
                              className="numpad"
                              onclick="keypadButtonClicked(this,&#39;pass&#39;);"
                              value="3"
                            >
                              3
                            </button>
                          </div>
                          <div className="virtual-numpad">
                            <button
                              id="clear"
                              type="button"
                              className="numpad"
                              onclick="del(&#39;pass&#39;);"
                              style={{
                                color: "#e49c2f",
                                fontWeight: "900",
                                fontSize: "26px",
                              }}
                            >
                              <i
                                className="fa fa-arrow-left"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-12 col-sm-4 col-form-label">
                        آدرس ایمیل (اختیاری)
                      </label>
                      <div className="col-12 col-sm-8">
                        <input
                          type="text"
                          placeholder="novinPSP@payment.com"
                          name="email"
                          tabindex="7"
                          className="form-control border-rd-numpad text-center"
                          id="email"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-12 col-sm-4 col-form-label">
                        تلفن همراه (اختیاری)
                      </label>
                      <div className="col-12 col-sm-8">
                        <input
                          type="tel"
                          placeholder="09*********"
                          name="mobileNo"
                          onkeypress="return validChar(event);"
                          tabindex="8"
                          className="form-control border-rd-numpad text-center"
                          id="smartPhone"
                          maxlength="11"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-4"></div>
                    </div>
                  </form>
                  <div className="col-md-8 col-sm-8 btn-submit-form w-full">
                    <button
                      className="btn btn-payment btn-3e icon-arrow-right"
                      onClick={payHandler}
                    >
                      پرداخت
                    </button>
                    <button
                      className="btn btn-decline btn-6f"
                      onClick={cancelHandler}
                    >
                      <span>انصراف</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 order-sm-12 merchant-info-parent order-12">
              <div className="merchant-info">
                <div className="merchant-info-content">
                  <div id="merchant-info-header" className="row">
                    <div className="col title">
                      <span>اطلاعات تراکنش</span>
                    </div>
                    <div className="ss"></div>
                  </div>
                  <div className="merchant-info-body">
                    <div className="merchant-info-details">
                      <div className="col-lg-12 merchant-logo">
                        <span className="helper">نام مشتری: {genderName} </span>
                        <div className="ss"></div>
                      </div>
                      <ul className="col-lg-12 merchant-detail">
                        <li>
                          <b>پذیرنده &nbsp;:&nbsp;هتل علیزاده </b>
                        </li>
                        <b>
                          <li>
                            شماره‌ پذیرنده &nbsp;<b>:&nbsp; 011277158</b>
                          </li>
                          <li>
                            شماره ترمینال &nbsp;<b>:&nbsp; 11282896</b>
                          </li>
                          <li>
                            سایت پذیرنده &nbsp;
                            <b className="merchantwebsite">
                              :&nbsp; <a>https://www.AlizadehHotel.com</a>
                            </b>
                          </li>
                        </b>
                      </ul>
                      <ul className="col-lg-12 merchant-detail">
                        <b> </b>
                      </ul>
                      <b>
                        <ul className="col-lg-12 merchant-info-price">
                          <div className="gradient"></div>
                          <li>
                            مبلغ قابل پرداخت :
                            <b className="price-number">{price} ریال </b>
                          </li>
                        </ul>
                      </b>
                    </div>
                    <b> </b>
                  </div>
                  <b> </b>
                </div>
                <b> </b>
              </div>
              <b> </b>
            </div>
          </div>
          <b> </b>
        </div>
        <b>
          <div className="container p-4">
            <div className="row">
              <div className="col-12 dynamicPin-info">
                <div className="info-header">
                  <i className="iIcon"></i>{" "}
                  <label>راهنمای استفاده از رمز پویا</label>
                </div>
                <div className="info-body">
                  <p className="info-item">
                    <i className="icon"></i>
                    <label>
                      رمز پویا رمز یکبار مصرفی است که به جای رمز دوم کارت
                      استفاده می شود.
                    </label>
                  </p>
                  <p className="info-item">
                    <i className="icon"></i>
                    <label>
                      مرحله اول- براساس دستورالعمل بانک صادرکننده کارت خود، نسبت
                      به فعالسازی رمز پویا اقدام نمایید.
                    </label>
                  </p>
                  <p className="info-item">
                    <i className="icon"></i>
                    <label>
                      مرحله دوم- رمز پویا ر ا براساس روش اعلامی از طرف بانک
                      صادرکننده کارت، به یکی از روشهای زیر دریافت کنید.
                    </label>
                  </p>
                  <div className="ml-4 mr-4">
                    <p className="under-info-item">
                      <i className="icon"></i>
                      <label>
                        1- دریافت از طریق برنامه کاربردی بانک، اینترنت بانک و یا
                        موبایل بانک
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon"></i>
                      <label>
                        2- دریافت از طریق کد USSD بانک صادرکننده کارت شما
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        3- دریافت از طریق زدن دکمه ی "درخواست رمز پویا" در درگاه
                        پرداخت اینترنتی
                      </label>
                    </p>
                  </div>
                  <p className="info-item">
                    <i className="icon"></i>
                    <label>
                      مرحله سوم- پس از دریافت رمز به یکی از روشهای فوق ، رمز
                      پویای دریافت شده را در محل تعیین شده "رمز دوم" وارد نمایید
                      و سپس مابقی اطلاعات را تکمیل نمایید.
                    </label>
                  </p>
                </div>
              </div>
              <div className="col-12 security-info mt-4">
                <div className="info-header">
                  <i className="iIcon icon"></i> <label>نکات امنیتی</label>
                </div>
                <div className="info-body">
                  <p className="info-item">
                    <i className="icon checkIcon"></i>
                    <label>
                      مشتري گرامي شما با پروتكل امن (SSL) به درگاه پرداخت
                      الكترونيك پرداخت نوين آرين كه با آدرس
                      https://pna.shaparak.ir شروع مي شود متصل شده ايد.
                    </label>
                  </p>
                  <p className="info-item">
                    <i className="icon checkIcon"></i>
                    <label>
                      خواهشمند است جهت جلوگيري از سوء استفاده هاي اينترنتي، آدرس
                      جاري مرورگر وب خود را با آدرس مذكور مقايسه نماييد.
                    </label>
                  </p>
                  <p className="info-item">
                    <i className="icon checkIcon"></i>
                    <label>
                      لطفا از صحت نام فروشنده و مبلغ نمايش داده شده، اطمينان
                      حاصل فرماييد. براي جلوگيري از افشاي رمز کارت خود، حتي
                      المقدور از صفحه کليد مجازي استفاده فرماييد.
                    </label>
                  </p>
                  <p className="info-item">
                    <i className="icon checkIcon"></i>{" "}
                    <label>نحوه ورود اطلاعات</label>
                  </p>
                  <div className="ml-5 mr-5">
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        شماره کارت: شماره کارت 16 رقمي مندرج بر روي کارت
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        رمز دوم کارت: رمز دوم(يا رمز اينترنتي) دريافت شده از
                        بانک صادرکننده و يا خودپرداز
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        CVV2: کد سه يا چهار رقمي مندرج در پشت و روي کارت
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        تاريخ انقضا: ماه و سال انقضاي کارت مندرج بر روي کارت
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        کد امنيتي: ارقام مندرج در ذيل عنوان کد امنيتي که قابل
                        تغيير نيز مي باشد
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        ايميل(اختياري): ورود آدرس ايميل در صورت نياز به دريافت
                        رسيد پرداخت
                      </label>
                    </p>
                    <p className="under-info-item">
                      <i className="icon checkIcon"></i>
                      <label>
                        شماره تلفن همراه(اختیاری): ورود شماره تلفن همراه در صورت
                        نیاز به ارسال پیامک رسید پرداخت
                      </label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footerPay">
            <div className="footer">
              <div className="col-xs-12 col-sm-12 col-md-12 template">
                <span className="">
                  شماره مرکز امداد مشتریان شرکت پرداخت
                  نوین:&nbsp;02148006&nbsp;و ایمیل
                  شرکت:&nbsp;Pnasupport@pna.co.ir
                </span>
              </div>
            </div>
          </footer>
          <form
            name="abortForm"
            id="abortForm"
            method="post"
            autocomplete="off"
            action="https://pna.shaparak.ir/_ipgw_//payment/abort"
          ></form>
          <form
            name="timeoutForm"
            id="timeoutForm"
            method="post"
            autocomplete="off"
            action="https://pna.shaparak.ir/_ipgw_//payment/timeout"
          ></form>
        </b>
      </div>
    </>
  )
}

export default Pay
