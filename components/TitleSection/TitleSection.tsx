import RegistrationForm from '../RegistrationForm/RegistrationForm';
import styles from './TitleSection.module.css';
import InfoTitleSection from '../InfoTitleSection/InfoTitleSection';

export default function TitleSection() {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
       <InfoTitleSection
       title='NeoFamily — умная подготовка к ЕГЭ' subtitle='Более 30 000 заданий по всем предметам ЕГЭ. Бесплатная теория, тесты и умное повторение'/>
      </section>

      <section className={styles.registration}>
        <div className={styles['block-svg']}>
          <svg
            className={styles.svg}
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.126 3.34765L13.9461 2.36396C13.4028 2.4633 13.043 2.98425 13.1423 3.52752L14.126 3.34765ZM22.771 1.76687L23.7547 1.587C23.707 1.32611 23.5576 1.09486 23.3394 0.944112C23.1212 0.793367 22.852 0.735479 22.5911 0.783185L22.771 1.76687ZM16.8928 18.4789L17.0727 19.4626C17.616 19.3633 17.9758 18.8423 17.8765 18.299L16.8928 18.4789ZM1.76636 21.2449L1.58648 20.2612C1.04321 20.3605 0.683325 20.8814 0.782665 21.4247L1.76636 21.2449ZM3.34713 29.8899L2.36344 30.0697C2.41115 30.3306 2.56054 30.5619 2.77875 30.7126C2.99696 30.8634 3.26611 30.9213 3.52701 30.8736L3.34713 29.8899ZM18.4736 27.1239L19.4573 26.9441C19.4096 26.6832 19.2602 26.4519 19.042 26.3012C18.8238 26.1504 18.5546 26.0925 18.2937 26.1402L18.4736 27.1239ZM21.2395 42.2502L20.2558 42.4301C20.3035 42.691 20.4529 42.9223 20.6711 43.073C20.8893 43.2237 21.1585 43.2816 21.4194 43.2339L21.2395 42.2502ZM29.8845 40.6695L30.0644 41.6531C30.6077 41.5538 30.9675 41.0329 30.8682 40.4896L29.8845 40.6695ZM27.1186 25.5432L26.9387 24.5595C26.3955 24.6588 26.0356 25.1798 26.1349 25.723L27.1186 25.5432ZM42.2497 22.7764L42.4296 23.7601C42.9729 23.6607 43.3327 23.1398 43.2334 22.5965L42.2497 22.7764ZM40.6689 14.1314L41.6526 13.9515C41.6049 13.6906 41.4555 13.4593 41.2373 13.3086C41.0191 13.1578 40.75 13.1 40.4891 13.1477L40.6689 14.1314ZM25.5378 16.8981L24.5541 17.078C24.6018 17.3389 24.7512 17.5702 24.9694 17.7209C25.1876 17.8716 25.4568 17.9295 25.7177 17.8818L25.5378 16.8981ZM14.3059 4.33134L22.9509 2.75056L22.5911 0.783185L13.9461 2.36396L14.3059 4.33134ZM17.8765 18.299L15.1097 3.16778L13.1423 3.52752L15.9091 18.6588L17.8765 18.299ZM1.94623 22.2285L17.0727 19.4626L16.7129 17.4952L1.58648 20.2612L1.94623 22.2285ZM4.33082 29.71L2.75005 21.065L0.782665 21.4247L2.36344 30.0697L4.33082 29.71ZM18.2937 26.1402L3.16726 28.9062L3.52701 30.8736L18.6535 28.1076L18.2937 26.1402ZM22.2232 42.0704L19.4573 26.9441L17.4899 27.3038L20.2558 42.4301L22.2232 42.0704ZM29.7046 39.6858L21.0596 41.2665L21.4194 43.2339L30.0644 41.6531L29.7046 39.6858ZM26.1349 25.723L28.9008 40.8493L30.8682 40.4896L28.1023 25.3633L26.1349 25.723ZM42.0698 21.7927L26.9387 24.5595L27.2985 26.5268L42.4296 23.7601L42.0698 21.7927ZM39.6852 14.3112L41.266 22.9562L43.2334 22.5965L41.6526 13.9515L39.6852 14.3112ZM25.7177 17.8818L40.8488 15.115L40.4891 13.1477L25.3579 15.9145L25.7177 17.8818ZM21.7873 1.94675L24.5541 17.078L26.5215 16.7183L23.7547 1.587L21.7873 1.94675Z"
              fill="#302A3E"
            />
          </svg>
        </div>
        <RegistrationForm />
      </section>

      <section className={styles.icon}>
        <svg
          width="380"
          height="372"
          viewBox="0 0 380 372"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M153.521 269.651C154.478 269.942 154.478 269.941 154.479 269.941L154.479 269.938L154.483 269.925L154.498 269.875L154.558 269.679L154.79 268.915L155.673 266.01C156.433 263.506 157.521 259.927 158.83 255.624C161.448 247.019 164.95 235.52 168.484 223.946C172.018 212.372 175.586 200.725 178.335 191.821C179.709 187.369 180.879 183.605 181.738 180.88C182.168 179.517 182.519 178.416 182.778 177.62C182.908 177.222 183.014 176.903 183.095 176.667C183.136 176.549 183.169 176.454 183.195 176.383C183.208 176.347 183.219 176.319 183.227 176.298L183.237 176.274C183.239 176.268 183.24 176.265 183.24 176.266C183.944 174.669 183.458 173.026 182.945 171.936C182.679 171.37 182.379 170.893 182.147 170.559C182.03 170.392 181.929 170.257 181.855 170.162C181.828 170.129 181.805 170.1 181.786 170.076C181.778 170.067 181.771 170.058 181.765 170.051L181.738 170.018L181.73 170.008L181.727 170.005L181.726 170.003L181.725 170.003C181.725 170.003 181.725 170.002 180.965 170.653L181.725 170.002L181.595 169.85L181.416 169.76L75.4669 116.29L75.2762 116.194L75.0629 116.184L72.3032 116.055L71.8739 116.035L71.564 116.333L68.7281 119.056L68.549 119.228L68.4712 119.464L42.1337 199.233L42.1201 199.275L42.1101 199.317C41.1665 203.312 40.978 205.718 41.0495 207.166C41.0855 207.893 41.1879 208.399 41.3059 208.752C41.3652 208.929 41.4292 209.07 41.4919 209.182C41.5233 209.238 41.5543 209.287 41.5841 209.329C41.599 209.35 41.6136 209.369 41.6277 209.386C41.6347 209.395 41.6417 209.404 41.6485 209.412L41.6586 209.423L41.6636 209.429L41.666 209.432C41.6672 209.433 41.6685 209.434 42.4116 208.765M153.521 269.651C154.241 270.346 154.24 270.346 154.24 270.346L154.239 270.347L154.238 270.349L154.233 270.354L154.219 270.368C154.208 270.379 154.192 270.395 154.173 270.413C154.135 270.451 154.081 270.502 154.012 270.565C153.876 270.69 153.68 270.86 153.434 271.05C152.946 271.427 152.24 271.9 151.388 272.25C150.536 272.6 149.501 272.843 148.381 272.707C147.245 272.57 146.096 272.053 145.027 271.007C144.877 270.86 144.36 270.477 143.403 269.838C142.482 269.223 141.232 268.422 139.697 267.459C136.627 265.535 132.439 262.98 127.511 260.012C117.656 254.078 104.861 246.502 92.178 239.037C79.4956 231.573 66.9284 224.221 57.5315 218.735C52.8331 215.992 48.9274 213.716 46.1963 212.125C44.8308 211.33 43.7589 210.706 43.0285 210.281L42.1948 209.796L41.9812 209.672L41.9272 209.64L41.9136 209.633L41.9102 209.631C41.9094 209.63 41.9091 209.63 42.4116 208.765M153.521 269.651L154.478 269.942L154.408 270.172L154.241 270.346L153.521 269.651ZM42.4116 208.765L41.9091 209.63L41.7734 209.551L41.6685 209.434L42.4116 208.765Z"
            fill="#F5B1B2"
            stroke="#302A3E"
            stroke-width="2"
          />
          <path
            d="M154.156 270.5L200.982 247.711C202.679 246.874 202.767 244.505 201.125 243.601L169.161 224.758"
            stroke="#302A3E"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M166.651 232.932L187.835 245.989L157.657 259.5"
            stroke="#302A3E"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M67.8906 124.499L180.722 181.6"
            stroke="#302A3E"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M219.791 150.394C219.791 150.394 234.679 148.457 242.622 132.323C250.564 116.188 237.666 102.823 231.177 107.133C224.688 111.443 227.839 131.671 248.307 129.567C266.735 127.672 271.177 107.969 271.177 107.969"
            stroke="#302A3E"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M51.5366 39.663L51.5308 39.6334L51.5233 39.6042L44.5984 12.7412C44.5983 12.7407 44.5982 12.7403 44.598 12.7398C44.5721 12.6364 44.5864 12.5588 44.6146 12.497C44.6472 12.4257 44.7036 12.3661 44.7644 12.3319C44.8243 12.2982 44.8568 12.3051 44.8581 12.3054L44.8582 12.3054C44.8594 12.3057 44.8661 12.3073 44.8797 12.3178C44.8945 12.3293 44.9273 12.3592 44.9678 12.427L45.0061 12.4909L45.053 12.5482L54.5763 24.1798L54.5816 24.1862L54.5869 24.1925C55.4263 25.1838 56.9108 25.2881 57.8745 24.4093L65.3312 17.6095C65.6156 17.3502 65.8967 17.5338 65.9381 17.7438L65.938 17.7439L65.9408 17.757L72.0409 46.7315L72.0453 46.7524L72.0506 46.7731C72.0781 46.8817 72.0598 46.9402 72.0434 46.9744C72.0217 47.0195 71.9758 47.0733 71.9008 47.1128C71.8257 47.1523 71.7465 47.1639 71.6817 47.1536C71.6266 47.1449 71.562 47.1185 71.4933 47.0373L61.1387 34.8094C60.2993 33.8181 58.8148 33.7138 57.8511 34.5926L52.1435 39.7974C52.0614 39.8723 51.9167 39.9141 51.7564 39.8662C51.6034 39.8205 51.5502 39.7319 51.5366 39.663Z"
            stroke="#302A3E"
            stroke-width="2"
          />
          <g filter="url(#filter0_d_208_9089)">
            <rect
              x="190.099"
              y="275.733"
              width="183"
              height="46"
              rx="23"
              transform="rotate(-11.9435 190.099 275.733)"
              fill="white"
            />
            <path
              d="M223.846 299.281C223.53 299.347 223.244 299.303 222.986 299.148C222.74 298.975 222.583 298.731 222.516 298.415L221.396 293.12C221.223 292.302 220.931 291.667 220.521 291.214C220.11 290.761 219.621 290.468 219.053 290.333C218.496 290.181 217.887 290.175 217.227 290.314C216.625 290.442 216.105 290.679 215.669 291.026C215.233 291.373 214.915 291.785 214.716 292.262C214.514 292.725 214.469 293.221 214.581 293.752L213.225 294.039C213.034 293.135 213.079 292.286 213.361 291.492C213.654 290.68 214.137 289.986 214.81 289.409C215.482 288.832 216.292 288.443 217.239 288.243C218.229 288.034 219.157 288.062 220.023 288.329C220.9 288.578 221.648 289.064 222.265 289.788C222.898 290.509 223.34 291.465 223.592 292.656L224.712 297.951C224.778 298.266 224.727 298.555 224.557 298.815C224.399 299.059 224.162 299.214 223.846 299.281ZM215 301.152C214.684 301.219 214.397 301.174 214.14 301.019C213.893 300.846 213.737 300.602 213.67 300.286L211.639 290.687C211.57 290.357 211.614 290.07 211.772 289.827C211.945 289.58 212.189 289.424 212.505 289.357C212.835 289.287 213.122 289.331 213.365 289.49C213.608 289.648 213.765 289.892 213.835 290.222L215.865 299.822C215.932 300.138 215.888 300.424 215.732 300.682C215.574 300.925 215.33 301.082 215 301.152ZM233.925 297.216C232.763 297.462 231.684 297.428 230.688 297.114C229.689 296.786 228.837 296.231 228.132 295.451C227.439 294.653 226.969 293.673 226.723 292.511C226.475 291.334 226.507 290.248 226.821 289.252C227.146 288.239 227.701 287.387 228.484 286.696C229.265 285.992 230.236 285.516 231.398 285.27C232.546 285.028 233.62 285.07 234.619 285.399C235.614 285.713 236.459 286.269 237.153 287.067C237.857 287.847 238.334 288.825 238.583 290.002C238.829 291.164 238.796 292.251 238.485 293.261C238.171 294.257 237.624 295.107 236.844 295.812C236.06 296.502 235.087 296.97 233.925 297.216ZM233.515 295.279C234.261 295.121 234.885 294.809 235.386 294.344C235.887 293.878 236.232 293.31 236.42 292.641C236.623 291.968 236.641 291.237 236.474 290.448C236.307 289.659 235.995 288.998 235.537 288.465C235.091 287.915 234.544 287.528 233.897 287.305C233.251 287.082 232.554 287.05 231.808 287.208C231.062 287.365 230.438 287.677 229.937 288.143C229.436 288.609 229.086 289.185 228.886 289.872C228.684 290.544 228.666 291.275 228.833 292.064C229 292.854 229.312 293.515 229.769 294.048C230.227 294.58 230.779 294.958 231.426 295.181C232.073 295.404 232.769 295.437 233.515 295.279ZM252.994 293.093C252.679 293.159 252.392 293.115 252.134 292.96C251.888 292.787 251.731 292.543 251.664 292.227L249.638 282.649C249.569 282.319 249.613 282.032 249.771 281.789C249.944 281.542 250.188 281.386 250.504 281.319C250.834 281.249 251.113 281.295 251.342 281.457C251.571 281.618 251.721 281.864 251.791 282.194L253.817 291.772C253.883 292.087 253.846 292.373 253.705 292.627C253.561 292.868 253.324 293.023 252.994 293.093ZM244.148 294.964C243.832 295.031 243.553 294.985 243.309 294.826C243.077 294.651 242.928 294.405 242.861 294.089L240.835 284.511C240.765 284.181 240.802 283.896 240.946 283.656C241.105 283.412 241.342 283.257 241.658 283.19C241.988 283.121 242.274 283.165 242.518 283.323C242.761 283.482 242.918 283.726 242.987 284.056L245.014 293.634C245.08 293.95 245.036 294.236 244.881 294.494C244.722 294.737 244.478 294.894 244.148 294.964ZM243.878 289.647L243.468 287.709L251.023 286.111L251.433 288.049L243.878 289.647ZM260.096 296.852C259.78 296.919 259.492 296.868 259.231 296.698C258.988 296.539 258.833 296.302 258.766 295.987L256.69 286.172C256.465 285.035 256.515 283.96 256.84 282.947C257.165 281.934 257.718 281.075 258.498 280.37C259.276 279.651 260.224 279.173 261.343 278.936C262.477 278.697 263.545 278.748 264.547 279.091C265.546 279.419 266.399 279.981 267.107 280.775C267.829 281.567 268.31 282.53 268.55 283.663C268.789 284.797 268.761 285.867 268.464 286.875C268.179 287.864 267.676 288.713 266.956 289.42C266.233 290.112 265.348 290.569 264.301 290.791C263.454 290.97 262.636 290.963 261.845 290.771C261.066 290.561 260.362 290.207 259.732 289.711L260.962 295.522C261.028 295.838 260.982 296.118 260.824 296.361C260.669 296.619 260.426 296.782 260.096 296.852ZM263.46 288.945C264.192 288.79 264.809 288.48 265.31 288.014C265.808 287.534 266.158 286.958 266.361 286.285C266.575 285.595 266.601 284.87 266.44 284.11C266.276 283.335 265.958 282.682 265.487 282.153C265.026 281.605 264.472 281.22 263.826 280.997C263.176 280.76 262.485 280.719 261.753 280.873C261.036 281.025 260.421 281.343 259.908 281.826C259.407 282.292 259.057 282.868 258.857 283.555C258.655 284.227 258.635 284.951 258.799 285.726C258.96 286.486 259.271 287.14 259.731 287.687C260.189 288.22 260.743 288.605 261.392 288.843C262.054 289.063 262.743 289.097 263.46 288.945ZM277.992 287.895C276.945 288.116 275.95 288.057 275.009 287.716C274.064 287.361 273.254 286.791 272.578 286.004C271.913 285.201 271.461 284.232 271.221 283.098C270.981 281.965 271.024 280.891 271.35 279.878C271.689 278.862 272.249 278.001 273.03 277.296C273.821 276.574 274.777 276.095 275.896 275.858C277.015 275.621 278.076 275.674 279.078 276.017C280.077 276.345 280.93 276.907 281.638 277.702C282.36 278.493 282.841 279.456 283.081 280.59L282.241 280.767C282.481 281.901 282.453 282.971 282.156 283.978C281.871 284.968 281.368 285.817 280.648 286.523C279.925 287.216 279.04 287.673 277.992 287.895ZM278.013 285.867C278.745 285.712 279.361 285.401 279.863 284.936C280.361 284.456 280.711 283.879 280.914 283.207C281.113 282.52 281.132 281.796 280.971 281.036C280.808 280.261 280.497 279.607 280.039 279.074C279.579 278.527 279.025 278.142 278.378 277.919C277.728 277.682 277.038 277.64 276.306 277.795C275.588 277.947 274.973 278.264 274.461 278.748C273.96 279.213 273.602 279.791 273.389 280.481C273.186 281.154 273.167 281.877 273.331 282.652C273.491 283.413 273.802 284.066 274.263 284.614C274.735 285.143 275.295 285.527 275.945 285.764C276.606 285.984 277.296 286.018 278.013 285.867ZM283.231 286.719C282.915 286.786 282.628 286.742 282.37 286.586C282.124 286.414 281.967 286.169 281.901 285.854L281.204 282.561L281.13 280.193L283.081 280.59L284.096 285.389C284.163 285.705 284.111 285.993 283.942 286.254C283.783 286.497 283.546 286.653 283.231 286.719ZM288.689 285.542C288.373 285.609 288.086 285.565 287.829 285.409C287.582 285.237 287.426 284.992 287.359 284.677L285.328 275.077C285.29 274.755 285.35 274.473 285.509 274.229C285.667 273.986 285.897 273.833 286.198 273.769C286.528 273.699 286.815 273.743 287.059 273.902C287.302 274.06 287.459 274.304 287.528 274.634L288.311 278.336L292.487 277.453L292.578 277.884C293.367 277.717 294.092 277.706 294.752 277.851C295.427 277.993 295.988 278.272 296.436 278.687C296.88 279.087 297.169 279.603 297.303 280.235C297.44 280.88 297.389 281.491 297.151 282.066C296.912 282.641 296.515 283.137 295.959 283.555C295.417 283.969 294.751 284.26 293.962 284.427L288.689 285.542ZM289.354 283.265L293.53 282.382C294.104 282.261 294.541 282.026 294.842 281.677C295.14 281.314 295.242 280.91 295.148 280.466C295.048 279.992 294.787 279.643 294.364 279.417C293.942 279.192 293.443 279.14 292.869 279.261L288.694 280.144L289.354 283.265ZM291.033 278.975L290.787 277.813L292.831 277.38C293.19 277.304 293.455 277.106 293.627 276.785C293.796 276.449 293.835 276.066 293.744 275.636C293.665 275.263 293.464 274.983 293.139 274.797C292.815 274.61 292.445 274.561 292.029 274.649L286.648 275.787L286.22 273.764L291.601 272.626C292.275 272.483 292.9 272.494 293.474 272.657C294.059 272.803 294.553 273.081 294.954 273.491C295.353 273.886 295.616 274.385 295.743 274.988C295.919 275.82 295.749 276.576 295.233 277.254C294.729 277.916 294.01 278.345 293.077 278.543L291.033 278.975ZM305.68 282.061C304.69 282.27 303.757 282.25 302.879 282.001C302.014 281.734 301.264 281.241 300.632 280.52C300.014 279.796 299.58 278.839 299.328 277.648L298.208 272.353C298.141 272.037 298.187 271.758 298.345 271.514C298.515 271.253 298.757 271.09 299.073 271.023C299.389 270.956 299.67 271.009 299.916 271.182C300.174 271.337 300.336 271.573 300.403 271.888L301.523 277.183C301.693 277.987 301.985 278.622 302.398 279.089C302.809 279.542 303.3 279.843 303.871 279.992C304.439 280.127 305.046 280.126 305.692 279.989C306.309 279.859 306.829 279.621 307.25 279.277C307.687 278.93 308.004 278.518 308.203 278.041C308.402 277.565 308.447 277.068 308.338 276.551L309.694 276.264C309.882 277.154 309.83 278.005 309.536 278.816C309.258 279.625 308.782 280.318 308.11 280.895C307.452 281.469 306.642 281.857 305.68 282.061ZM310.414 280.947C310.099 281.014 309.812 280.969 309.554 280.814C309.308 280.641 309.151 280.397 309.084 280.081L307.054 270.482C306.984 270.152 307.028 269.865 307.187 269.622C307.36 269.375 307.604 269.218 307.919 269.152C308.249 269.082 308.536 269.126 308.78 269.285C309.023 269.443 309.18 269.687 309.249 270.017L311.28 279.617C311.347 279.933 311.302 280.219 311.147 280.477C310.989 280.72 310.744 280.877 310.414 280.947ZM330.837 276.649C330.522 276.716 330.235 276.672 329.977 276.516C329.731 276.344 329.574 276.099 329.507 275.784L328.205 269.628C328.014 268.724 327.65 268.104 327.115 267.767C326.576 267.417 325.947 267.317 325.23 267.469C324.484 267.627 323.921 268.016 323.543 268.635C323.179 269.252 323.081 269.962 323.251 270.766L321.465 271.144C321.268 270.211 321.296 269.351 321.549 268.562C321.799 267.76 322.24 267.082 322.872 266.528C323.519 265.972 324.309 265.595 325.242 265.398C326.06 265.225 326.822 265.251 327.529 265.476C328.237 265.701 328.837 266.129 329.33 266.759C329.834 267.372 330.191 268.173 330.401 269.164L331.703 275.319C331.77 275.635 331.725 275.922 331.57 276.179C331.411 276.423 331.167 276.579 330.837 276.649ZM316.481 279.686C316.165 279.753 315.879 279.708 315.621 279.553C315.374 279.38 315.218 279.136 315.151 278.82L313.125 269.242C313.055 268.912 313.099 268.626 313.258 268.382C313.431 268.136 313.675 267.979 313.991 267.913C314.321 267.843 314.607 267.887 314.851 268.045C315.094 268.204 315.251 268.448 315.32 268.778L317.346 278.356C317.413 278.672 317.369 278.958 317.214 279.216C317.055 279.46 316.811 279.616 316.481 279.686ZM323.67 278.165C323.354 278.232 323.067 278.188 322.81 278.032C322.563 277.86 322.407 277.616 322.34 277.3L321.038 271.144C320.847 270.24 320.483 269.62 319.947 269.283C319.408 268.933 318.78 268.833 318.063 268.985C317.316 269.143 316.754 269.532 316.375 270.151C315.997 270.771 315.893 271.483 316.063 272.286L314.707 272.573C314.509 271.641 314.523 270.783 314.747 270.001C314.968 269.205 315.367 268.536 315.942 267.994C316.517 267.453 317.228 267.093 318.074 266.914C318.892 266.741 319.655 266.767 320.362 266.992C321.069 267.217 321.669 267.645 322.162 268.275C322.667 268.888 323.024 269.69 323.233 270.68L324.535 276.835C324.602 277.151 324.558 277.438 324.402 277.696C324.244 277.939 324 278.096 323.67 278.165ZM340.934 274.581C339.786 274.824 338.706 274.782 337.692 274.457C336.691 274.114 335.837 273.553 335.132 272.772C334.439 271.975 333.972 271.009 333.733 269.875C333.487 268.713 333.519 267.627 333.83 266.617C334.141 265.606 334.681 264.758 335.45 264.07C336.216 263.369 337.166 262.898 338.3 262.658C339.146 262.479 339.956 262.48 340.729 262.661C341.499 262.828 342.232 263.175 342.928 263.703C343.178 263.89 343.3 264.111 343.294 264.368C343.288 264.624 343.176 264.872 342.957 265.113C342.786 265.299 342.574 265.397 342.321 265.405C342.065 265.399 341.816 265.317 341.572 265.159C340.711 264.562 339.757 264.374 338.71 264.595C337.978 264.75 337.368 265.059 336.882 265.521C336.392 265.97 336.053 266.529 335.865 267.198C335.676 267.868 335.669 268.611 335.842 269.429C336.006 270.204 336.309 270.859 336.753 271.395C337.21 271.928 337.764 272.313 338.414 272.551C339.06 272.774 339.764 272.805 340.525 272.644C341.027 272.538 341.452 272.388 341.801 272.194C342.161 271.983 342.472 271.715 342.733 271.39C342.923 271.155 343.138 271.004 343.379 270.938C343.617 270.858 343.846 270.877 344.066 270.995C344.352 271.144 344.537 271.345 344.621 271.597C344.701 271.835 344.662 272.076 344.504 272.319C343.674 273.499 342.484 274.253 340.934 274.581ZM355.952 271.314C355.651 271.378 355.379 271.331 355.135 271.172C354.889 271 354.732 270.755 354.665 270.44L354.064 267.599L351.03 268.24L350.97 267.961C350.21 268.122 349.504 268.114 348.852 267.937C348.199 267.76 347.652 267.441 347.21 266.98C346.768 266.519 346.472 265.936 346.323 265.233C346.162 264.473 346.198 263.753 346.429 263.075C346.675 262.393 347.077 261.813 347.635 261.335C348.205 260.84 348.906 260.504 349.738 260.328L353.462 259.541C353.792 259.471 354.079 259.515 354.322 259.674C354.565 259.832 354.722 260.076 354.792 260.406L356.822 270.006C356.875 270.325 356.822 270.606 356.663 270.849C356.519 271.089 356.282 271.244 355.952 271.314ZM348.257 272.672C347.985 272.52 347.83 272.32 347.793 272.073C347.755 271.826 347.794 271.586 347.91 271.351L349.812 267.374L352.674 266.768L349.964 272.131C349.787 272.499 349.517 272.713 349.155 272.775C348.794 272.836 348.494 272.802 348.257 272.672ZM351.013 266.355L353.682 265.791L352.84 261.809L350.171 262.373C349.597 262.495 349.134 262.787 348.782 263.252C348.428 263.701 348.311 264.213 348.433 264.787C348.56 265.39 348.879 265.832 349.388 266.114C349.897 266.396 350.439 266.476 351.013 266.355Z"
              fill="#302A3E"
            />
            <rect
              x="183.062"
              y="242.469"
              width="86"
              height="46"
              rx="23"
              transform="rotate(-11.9435 183.062 242.469)"
              fill="white"
            />
            <path
              d="M212.049 267.001C211.733 267.068 211.445 267.017 211.184 266.847C210.923 266.677 210.759 266.435 210.693 266.119L207.374 250.428L209.612 249.955L212.931 265.645C212.998 265.961 212.946 266.249 212.777 266.51C212.607 266.771 212.364 266.935 212.049 267.001ZM203.162 253.478C202.86 253.542 202.589 253.501 202.349 253.357C202.12 253.196 201.974 252.965 201.91 252.663C201.846 252.362 201.888 252.098 202.035 251.872C202.193 251.629 202.423 251.475 202.724 251.412L214.24 248.976C214.541 248.912 214.806 248.961 215.035 249.122C215.276 249.266 215.428 249.489 215.491 249.79C215.555 250.092 215.508 250.364 215.349 250.607C215.202 250.833 214.978 250.978 214.677 251.042L203.162 253.478ZM223.404 264.689C222.213 264.941 221.098 264.915 220.059 264.61C219.032 264.288 218.158 263.738 217.439 262.96C216.732 262.166 216.255 261.187 216.009 260.025C215.76 258.848 215.785 257.763 216.085 256.771C216.396 255.76 216.936 254.912 217.705 254.224C218.471 253.522 219.421 253.052 220.555 252.812C221.674 252.575 222.688 252.623 223.598 252.955C224.505 253.273 225.259 253.826 225.86 254.613C226.473 255.383 226.899 256.335 227.139 257.468C227.196 257.741 227.152 257.99 227.005 258.216C226.855 258.428 226.636 258.564 226.349 258.625L217.675 260.459L217.311 258.738L225.92 256.916L225.165 257.706C224.999 256.991 224.721 256.383 224.33 255.881C223.935 255.365 223.452 254.995 222.88 254.771C222.308 254.547 221.664 254.511 220.946 254.663C220.128 254.836 219.463 255.164 218.951 255.647C218.453 256.127 218.12 256.715 217.952 257.41C217.781 258.091 217.779 258.826 217.946 259.615C218.113 260.404 218.441 261.069 218.93 261.611C219.42 262.152 220.018 262.535 220.725 262.76C221.432 262.985 222.195 263.011 223.013 262.838C223.458 262.744 223.893 262.57 224.319 262.315C224.756 262.042 225.095 261.768 225.337 261.492C225.518 261.289 225.731 261.161 225.975 261.11C226.23 261.041 226.468 261.066 226.688 261.184C226.977 261.348 227.157 261.557 227.226 261.812C227.295 262.068 227.227 262.314 227.022 262.552C226.616 263.043 226.073 263.488 225.393 263.886C224.727 264.282 224.064 264.55 223.404 264.689ZM236.622 261.893C235.474 262.136 234.405 262.115 233.415 261.83C232.425 261.544 231.591 261.039 230.913 260.313C230.232 259.572 229.77 258.666 229.528 257.592L230.583 257.369C230.352 256.279 230.373 255.277 230.645 254.365C230.928 253.436 231.414 252.651 232.103 252.011C232.806 251.367 233.675 250.936 234.708 250.718C235.741 250.499 236.702 250.543 237.591 250.85C238.495 251.153 239.257 251.674 239.878 252.412C240.51 253.133 240.942 254.039 241.173 255.129C241.4 256.205 241.36 257.218 241.051 258.168C240.739 259.104 240.203 259.899 239.442 260.555C238.681 261.211 237.741 261.657 236.622 261.893ZM236.212 259.956C236.93 259.805 237.522 259.522 237.989 259.108C238.468 258.677 238.8 258.157 238.986 257.548C239.186 256.936 239.212 256.279 239.063 255.575C238.915 254.872 238.626 254.289 238.198 253.825C237.782 253.343 237.269 253.009 236.66 252.823C236.062 252.62 235.404 252.594 234.687 252.746C233.941 252.904 233.314 253.201 232.807 253.638C232.297 254.061 231.934 254.58 231.72 255.195C231.516 255.793 231.489 256.443 231.638 257.146C231.786 257.849 232.076 258.44 232.507 258.919C232.953 259.394 233.496 259.729 234.136 259.923C234.774 260.103 235.466 260.114 236.212 259.956ZM229.528 257.592L229.035 255.156C228.691 253.459 228.83 251.811 229.451 250.211C230.086 248.607 231.287 247.161 233.053 245.873L236.7 243.235C236.963 243.06 237.218 242.991 237.466 243.028C237.711 243.052 237.911 243.182 238.066 243.419C238.224 243.67 238.299 243.917 238.29 244.158C238.292 244.383 238.125 244.62 237.789 244.872L233.843 247.797C232.935 248.469 232.226 249.189 231.713 249.957C231.201 250.725 230.871 251.537 230.722 252.393C230.585 253.231 230.597 254.106 230.76 255.016L231.186 257.242L229.528 257.592ZM251.15 258.82C249.959 259.072 248.844 259.046 247.805 258.741C246.777 258.419 245.904 257.869 245.185 257.091C244.477 256.297 244 255.318 243.754 254.156C243.505 252.979 243.531 251.895 243.831 250.902C244.142 249.891 244.682 249.043 245.451 248.355C246.217 247.654 247.166 247.183 248.3 246.943C249.419 246.706 250.434 246.754 251.344 247.086C252.25 247.404 253.004 247.957 253.606 248.744C254.218 249.514 254.644 250.466 254.884 251.599C254.942 251.872 254.897 252.121 254.75 252.347C254.6 252.559 254.381 252.695 254.094 252.756L245.42 254.591L245.056 252.869L253.666 251.048L252.911 251.837C252.745 251.122 252.466 250.514 252.075 250.012C251.681 249.496 251.198 249.126 250.626 248.902C250.054 248.678 249.409 248.642 248.692 248.794C247.874 248.967 247.209 249.295 246.696 249.778C246.198 250.259 245.865 250.846 245.697 251.541C245.526 252.222 245.525 252.957 245.691 253.746C245.858 254.535 246.187 255.201 246.676 255.742C247.165 256.283 247.763 256.666 248.47 256.891C249.178 257.116 249.94 257.142 250.758 256.969C251.203 256.875 251.638 256.701 252.064 256.446C252.501 256.173 252.841 255.899 253.082 255.623C253.264 255.42 253.477 255.293 253.721 255.241C253.976 255.172 254.213 255.197 254.433 255.315C254.723 255.479 254.902 255.688 254.971 255.943C255.04 256.199 254.972 256.445 254.768 256.683C254.362 257.174 253.819 257.619 253.139 258.017C252.473 258.413 251.81 258.681 251.15 258.82Z"
              fill="#302A3E"
            />
          </g>
          <circle
            cx="312"
            cy="57"
            r="23"
            fill="#CDE1A4"
            stroke="#302A3E"
            stroke-width="2"
          />
          <path
            d="M321 56.134C321.667 56.5189 321.667 57.4811 321 57.866L308.25 65.2272C307.583 65.6121 306.75 65.131 306.75 64.3612L306.75 49.6388C306.75 48.869 307.583 48.3879 308.25 48.7728L321 56.134Z"
            stroke="#302A3E"
            stroke-width="2"
          />
          <defs>
            <filter
              id="filter0_d_208_9089"
              x="169.062"
              y="190.598"
              width="227.594"
              height="148.14"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_208_9089"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_208_9089"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </section>

     
    </div>
  );
}