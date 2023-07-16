import React from "react";
import "./Info.css";
function Info() {
  return (
    <>
      {" "}
      <div className="main__left">
        <div className="main__leftHeader">
          <p className="main__leftHeaderText1">Access curated courses worth</p>
          <div className="main__leftHeaderText2">
            <p className="main__rupees">₹ 18,500</p>
            <p className="text-line"></p>
            <p className="text">at just</p>
            <p className="main__rupees_2">₹ 99</p>
            <p className="text">per year!</p>
          </div>
        </div>
        <div className="main__pointers">
          <div className="main__pointer1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="52"
              viewBox="0 0 60 62"
              fill="none"
            >
              <path
                d="M57.936 5.01614C57.232 5.01614 56.4641 5.07998 55.6958 5.07998H55.6319V2.32821C55.6319 1.36839 54.8641 0.600098 53.9038 0.600098C45.648 0.600098 37.5838 2.2001 29.9678 5.33621C22.3517 2.2001 14.2878 0.600098 6.03181 0.600098C5.07199 0.600098 4.3037 1.30412 4.3037 2.32821V5.14433H4.23986C3.472 5.08004 2.70409 5.0162 1.93586 5.0162C0.976041 5.0162 0.271973 5.78406 0.271973 6.74432V40.7923C0.271973 41.7521 0.975995 42.4562 1.93586 42.4562C7.37609 42.4562 12.752 43.0964 17.9359 44.3763C17.4881 45.7201 17.168 47.1281 17.168 48.6C17.168 55.6402 22.9278 61.4 29.968 61.4C37.0082 61.4 42.768 55.6402 42.768 48.6C42.768 47.1281 42.4479 45.7201 42.0001 44.3759C47.2484 43.096 52.5599 42.4557 58.0001 42.4557C58.96 42.4557 59.7283 41.7517 59.7283 40.7919L59.7278 6.74386C59.664 5.7836 58.8961 5.01574 57.9358 5.01574L57.936 5.01614ZM7.69599 3.99204C14.7362 4.18401 21.648 5.65593 28.304 8.34381V35.9918C26 36.3119 23.9522 37.2079 22.2241 38.5516C17.488 37.2717 12.6241 36.5034 7.76011 36.3757L7.75966 3.9917L7.69599 3.99204ZM29.968 58.3921C24.5921 58.3921 20.2399 54.0403 20.2399 48.6639C20.2399 43.2881 24.5921 38.8719 29.968 38.8719C35.3439 38.8719 39.6961 43.2237 39.6961 48.6C39.6961 53.9759 35.3439 58.3921 29.968 58.3921ZM52.24 36.376C47.3761 36.5042 42.5119 37.272 37.776 38.5519C36.0479 37.2077 33.9358 36.3117 31.6961 35.9922V8.34416C38.2881 5.65581 45.2001 4.18393 52.2401 3.99193L52.24 36.376Z"
                fill="white"
              />
              <path
                d="M12.3042 12.4397C15.8881 12.8237 19.4721 13.5277 22.9922 14.6156C23.1203 14.6795 23.3123 14.6795 23.5043 14.6795C24.2721 14.6795 24.9123 14.1674 25.1043 13.4634C25.3601 12.5674 24.8485 11.6076 23.9525 11.3514C20.2405 10.2634 16.4645 9.49558 12.6886 9.04736C11.7926 8.98352 10.9605 9.62325 10.8329 10.5192C10.769 10.9675 10.8967 11.4152 11.2168 11.7354C11.4721 12.1836 11.856 12.4397 12.3042 12.4397Z"
                fill="white"
              />
              <path
                d="M12.3041 18.9041C15.888 19.288 19.472 19.992 22.9921 21.08C23.1202 21.1438 23.3122 21.1438 23.4403 21.1438C24.2082 21.1438 24.8483 20.6318 25.0403 19.9277C25.2961 19.0317 24.7845 18.0719 23.8885 17.8157C20.2403 16.7278 16.4005 15.9599 12.6247 15.5117C11.6648 15.4479 10.8965 16.0876 10.7689 16.9836C10.705 17.4318 10.8327 17.8796 11.1528 18.1997C11.472 18.6484 11.8559 18.9041 12.3041 18.9041Z"
                fill="white"
              />
              <path
                d="M12.3042 25.368C15.8881 25.7519 19.4721 26.4559 22.9922 27.5439C23.1203 27.6077 23.3123 27.6077 23.5043 27.6077C24.2721 27.6077 24.9123 27.0956 25.1043 26.3916C25.3601 25.4956 24.8485 24.5358 23.9525 24.2796C20.3043 23.1916 16.4645 22.4238 12.6886 21.9756C11.7926 21.9117 10.9605 22.5515 10.8329 23.4475C10.769 23.8957 10.8967 24.3434 11.2168 24.6636C11.4721 25.1122 11.856 25.3041 12.3042 25.368Z"
                fill="white"
              />
              <path
                d="M22.9921 34.0079C23.1202 34.0718 23.3122 34.0718 23.4403 34.0718C24.2082 34.0718 24.8483 33.5597 25.0403 32.8557C25.2961 31.9597 24.7845 30.9999 23.8885 30.7437C20.2403 29.6557 16.4005 28.8879 12.6247 28.4397C11.6648 28.3115 10.8327 29.0156 10.7689 29.9115C10.705 30.3598 10.8327 30.8075 11.1528 31.1277C11.4086 31.5116 11.8568 31.7036 12.3046 31.7678C15.888 32.2161 19.472 32.9201 22.9921 34.0081L22.9921 34.0079Z"
                fill="white"
              />
              <path
                d="M36.4961 14.68C36.688 14.68 36.8162 14.68 37.0081 14.6161C40.4639 13.592 44.1121 12.8241 47.6961 12.4403C48.1443 12.3764 48.5283 12.1845 48.8479 11.8001C49.1037 11.4161 49.2318 11.0322 49.2318 10.584C49.168 9.68799 48.3997 9.04785 47.5037 9.04785H47.3756C43.5997 9.43178 39.8238 10.1996 36.1117 11.3519C35.6635 11.48 35.3438 11.8001 35.0876 12.184C34.8956 12.5679 34.8318 13.0161 34.9595 13.4639C35.088 14.2322 35.7278 14.68 36.4961 14.68Z"
                fill="white"
              />
              <path
                d="M36.4961 21.144C36.6881 21.144 36.8162 21.144 37.0081 21.0802C40.4639 20.0561 44.1121 19.2882 47.6961 18.9043C48.1444 18.8405 48.5283 18.6485 48.8479 18.2641C49.1037 17.8802 49.2319 17.4963 49.2319 17.048C49.1037 16.152 48.272 15.448 47.3761 15.5761C43.6002 15.9601 39.76 16.7279 36.1122 17.8801C35.664 18.0083 35.3443 18.3284 35.0881 18.7123C34.8961 19.0962 34.8323 19.5444 34.96 19.9922C35.0881 20.6319 35.7278 21.144 36.4961 21.144Z"
                fill="white"
              />
              <path
                d="M36.4961 27.6078C36.6881 27.6078 36.8162 27.6078 37.0081 27.544C40.4639 26.5199 44.0484 25.752 47.6961 25.3681C48.1444 25.3043 48.5283 25.1123 48.8479 24.7279C49.1037 24.344 49.2319 23.9601 49.2319 23.5118C49.1037 22.6158 48.272 21.9118 47.3761 21.9757C43.6002 22.3596 39.76 23.1275 36.1122 24.2797C35.664 24.4078 35.3443 24.7279 35.0881 25.1118C34.8961 25.4958 34.8323 25.944 34.96 26.3917C35.0881 27.0958 35.7278 27.6078 36.4961 27.6078Z"
                fill="white"
              />
              <path
                d="M36.4961 34.0718C36.6881 34.0718 36.8162 34.0718 37.0081 34.0079C40.4639 32.9838 44.1121 32.2159 47.6961 31.8321C48.1444 31.7682 48.5283 31.5762 48.8479 31.1919C49.1037 30.8718 49.2319 30.424 49.2319 29.9758C49.1037 29.0798 48.272 28.3758 47.3761 28.5039C43.6002 28.8878 39.76 29.6556 36.1122 30.8079C35.664 30.936 35.3443 31.2561 35.0881 31.64C34.8961 32.0239 34.8323 32.4721 34.96 32.9199C35.0881 33.5596 35.7278 34.0717 36.4961 34.0717L36.4961 34.0718Z"
                fill="white"
              />
              <path
                d="M28.5603 43.5441C27.7281 42.9682 26.6401 43.6079 26.6401 44.5682V52.5682C26.6401 53.528 27.7281 54.1682 28.5603 53.5923L34.5764 49.5602C35.3442 49.0481 35.3442 47.9602 34.5764 47.512L28.5603 43.5441Z"
                fill="white"
              />
            </svg>
            <p className="main__pointer1_text">
              <span className="main__pointer1_rupee">100+</span> Job relevant
              courses
            </p>
          </div>
          <div className="main__pointer1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="52"
              viewBox="0 0 58 58"
              fill="none"
            >
              <path
                d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z"
                fill="white"
              />
              <path
                d="M31.8345 28.1679C31.8577 28.0206 31.88 27.8737 31.88 27.7197V15.1597C31.88 13.5695 30.5903 12.2798 29.0001 12.2798C27.41 12.2798 26.1202 13.5695 26.1202 15.1597V27.7208C26.1202 27.9659 26.0894 30.7538 26.9939 31.5646L35.9059 39.5538C36.4555 40.0471 37.1429 40.2891 37.8273 40.2891C38.617 40.2891 39.4041 39.9659 39.9732 39.3315C41.0348 38.1467 40.9357 36.3266 39.7513 35.265L31.8345 28.1679Z"
                fill="white"
              />
            </svg>
            <p className="main__pointer1_text">
              <span className="main__pointer1_rupee">20,000+</span> Hours of
              content
            </p>
          </div>
          <div className="main__pointer3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="52"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M18.5518 1.43163C18.0491 0.945471 17.3754 0.676717 16.6763 0.682968C15.9772 0.689218 15.308 0.969574 14.8138 1.46377C14.3192 1.95841 14.0388 2.6272 14.033 3.32628C14.0268 4.02539 14.2955 4.69908 14.7812 5.20217L23.5625 13.9834H8.6665C6.54513 13.9834 4.51028 14.8263 3.00982 16.3267C1.50936 17.8267 0.666504 19.8616 0.666504 21.9834V51.3171C0.666504 53.439 1.50936 55.4734 3.00982 56.9738C4.51028 58.4738 6.54513 59.3171 8.6665 59.3171H51.3339C53.4553 59.3171 55.4902 58.4738 56.9906 56.9738C58.4906 55.4734 59.3339 53.439 59.3339 51.3171V21.9834C59.3339 19.8616 58.4906 17.8267 56.9906 16.3267C55.4902 14.8263 53.4553 13.9834 51.3339 13.9834H36.4379L45.2192 5.20217C45.7049 4.69905 45.9737 4.02537 45.9679 3.32628C45.9616 2.62717 45.6808 1.9584 45.1866 1.46377C44.692 0.969574 44.0232 0.689219 43.3241 0.682968C42.625 0.676718 41.9513 0.945471 41.4487 1.43163L30.0007 12.8796L18.5518 1.43163ZM5.99977 21.9836C5.99977 21.2765 6.28057 20.5979 6.78102 20.0979C7.28102 19.5979 7.95919 19.3171 8.66628 19.3171H51.3337C52.0408 19.3171 52.719 19.5979 53.219 20.0979C53.719 20.5979 54.0002 21.2764 54.0002 21.9836V51.3173C54.0002 52.0245 53.719 52.7026 53.219 53.2026C52.719 53.703 52.0408 53.9838 51.3337 53.9838H8.66628C7.95913 53.9838 7.28102 53.703 6.78102 53.2026C6.28057 52.7026 5.99977 52.0244 5.99977 51.3173V21.9836Z"
                fill="white"
              />
            </svg>
            <p className="live">live</p>
            <p className="main__pointer1_text">
              <span className="main__pointer1_rupee">Exclusive</span> Job
              webinar access
            </p>
          </div>
          <div className="main__pointer1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="52"
              viewBox="0 0 62 46"
              fill="none"
            >
              <path
                d="M50.7846 15.0605V21.1404C50.7846 21.3569 50.6998 21.5735 50.5587 21.7427C47.4342 25.4507 38.4079 26.7686 31.001 26.7686C23.5844 26.7686 14.5587 25.4508 11.425 21.7427C11.2835 21.5735 11.2085 21.3569 11.2085 21.1404V15.0605L29.5799 19.0324C30.013 19.1454 30.4741 19.1923 31.001 19.1923C31.5094 19.1923 31.9893 19.1454 32.3844 19.0418L50.7846 15.0605Z"
                fill="white"
              />
              <path
                d="M61.9742 8.95209C61.9742 10.0061 61.2778 10.8628 60.252 11.0887L57.052 11.7851V22.1757C58.4828 22.7217 59.5086 24.5003 59.518 26.665L59.2921 26.4391C58.7649 25.9685 58.097 25.7052 57.4001 25.7052C57.2684 25.7052 57.1367 25.7145 57.0238 25.7333L52.713 26.298C52.8353 24.3029 53.8237 22.6837 55.1693 22.1757V12.1895L31.9875 17.2061C31.6674 17.2816 31.3286 17.3097 30.9992 17.3097C30.6603 17.3097 30.3308 17.2816 30.0201 17.2061L1.73785 11.0883C0.712396 10.8628 0.0253906 10.0061 0.0253906 8.95218C0.0253906 7.90754 0.712442 7.05081 1.7383 6.82498L30.0206 0.697776C30.6509 0.566085 31.3384 0.556702 31.9876 0.697776L60.2504 6.82498C61.2768 7.05132 61.9732 7.90757 61.9732 8.95218L61.9742 8.95209Z"
                fill="white"
              />
              <path
                d="M32.9969 39.7682L33.146 39.7851V30.7686L30.9907 31.0507L28.8447 30.7686V39.7851L28.9987 39.7677L27.0385 44.0726C26.8229 44.5458 27.0323 45.1039 27.505 45.3195C27.9849 45.5369 28.5381 45.3213 28.7519 44.853L30.9978 39.9204L33.2438 44.8525C33.4598 45.3257 34.0188 45.5347 34.4906 45.319C34.9634 45.1034 35.1728 44.5454 34.9571 44.0722L32.9969 39.7682Z"
                fill="white"
              />
              <path
                d="M26.9628 30.5248L4.73193 27.5976C4.45917 27.5601 4.18596 27.6445 3.97881 27.8329C2.34133 29.3012 1.8235 33.3012 2.03059 36.6047C2.13416 38.3083 2.54844 41.3199 4.07299 42.3739C4.2328 42.4868 4.4212 42.5431 4.60959 42.5431C4.64709 42.5431 4.68504 42.5431 4.71316 42.5337L26.9623 40.0021L26.9628 30.5248Z"
                fill="white"
              />
              <path
                d="M58.747 28.7453C58.5211 28.3596 58.2764 28.0676 58.0224 27.8324C57.8153 27.644 57.5425 27.5596 57.2693 27.5971L35.0293 30.5243V40.002L57.2887 42.5337C57.5146 42.5618 57.7405 42.5055 57.9289 42.3739C60.6298 40.4912 60.4699 31.7668 58.7477 28.7453L58.747 28.7453Z"
                fill="white"
              />
            </svg>

            <p className="main__pointer1_text4">
              Scholarship worth
              <span className="main__pointer1_rupee">₹94,500</span>
            </p>
          </div>
          <div className="main__pointer3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="52"
              viewBox="0 0 58 58"
              fill="none"
            >
              <path
                d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z"
                fill="white"
              />
            </svg>
            <p className="ADS">ADS</p>
            <p className="cross"></p>
            <p className="main__pointer1_text">
              <span className="main__pointer1_rupee">Ad Free</span>learning
              experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
