import React from 'react'
import Fade from 'react-reveal/Fade';
import './Used.scss'

const Used = () => {
  const techUsed = [
    {
      name: 'HTML',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em"><path d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172H4.664zm4.286 5.5l-.068-.763h7.107v2.842h-4.005l.259 2.911h3.746v2.842H9.649L8.951 8.91zm13.567 5.754l-.667 7.483-.043.48-5.822 1.616-5.814-1.616-.398-4.463h2.849l.202 2.267 3.163.854 3.165-.856.329-3.686h-3.485v-2.842h6.587l-.069.763zm.514-5.754l-.129 1.441-.057.639H16V8.149h7.1l-.068.762z" stroke="none" /></svg>
    },
    {
      name: 'CSS',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em"><path d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z" stroke="none" /></svg>
    },
    {
      name: 'React',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 34 32" height="1em" width="1em"><path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392 1.071-2.392 2.392-2.392 2.392 1.071 2.392 2.392z" stroke="none" /><path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463-.129.514-.232 1.003-.309 1.492-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026c-.463.617-.952 1.183-1.44 1.723-.489-.54-.977-1.106-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26-.797-.103-1.543-.232-2.263-.386.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286c-.334-.746-.592-1.466-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006.772-.051 1.543-.077 2.341-.077.823 0 1.595.026 2.341.077.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083-.334.694-.694 1.389-1.106 2.083-.386.669-.823 1.337-1.26 2.006-.772.051-1.543.077-2.341.077-.823 0-1.595-.026-2.341-.077-.463-.669-.874-1.337-1.26-2.006-.412-.695-.772-1.389-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572.746-.797 1.466-1.698 2.186-2.701 1.209-.103 2.366-.283 3.447-.54.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437-.334-1.055-.746-2.135-1.26-3.241.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389-1.08-.232-2.238-.412-3.447-.54-.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572-.746.797-1.466 1.697-2.186 2.701-1.209.103-2.366.283-3.447.54-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437.334 1.055.746 2.135 1.26 3.241-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z" stroke="none" /></svg>
    },
    {
      name: 'Javascript',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path></svg>
    },
    {
      name: 'Git',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path></svg>
    },
    {
      name: 'Sass',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em"><path d="M31.641 21.161c-.109-.911-.578-1.618-1.286-2.172-.82-.641-1.78-.905-2.803-.947-.834-.034-1.65.09-2.437.376-.224.081-.444.177-.67.268-.03-.055-.062-.107-.088-.162-.232-.474-.512-.927-.573-1.47-.044-.386-.098-.772-.006-1.153.088-.367.204-.728.312-1.091.056-.187.017-.291-.161-.375-.062-.029-.129-.055-.197-.065-.438-.063-.869-.027-1.293.096-.15.044-.259.128-.292.294-.019.095-.058.186-.084.28-.111.391-.189.789-.368 1.161-.449.934-.96 1.832-1.485 2.724-.057.096-.116.191-.188.308-.184-.385-.38-.73-.44-1.136-.067-.458-.12-.915-.006-1.37.085-.339.196-.672.298-1.006.049-.159.026-.242-.118-.326-.073-.042-.155-.08-.237-.092-.454-.067-.901-.032-1.338.11-.136.044-.207.132-.249.272-.122.413-.226.836-.397 1.229-.694 1.59-1.407 3.172-2.12 4.753-.149.33-.323.649-.491.97-.043.082-.104.153-.157.23-.043-.05-.059-.085-.059-.119.001-.203-.023-.413.016-.609.117-.594.252-1.186.395-1.775.117-.486.254-.968.385-1.452.044-.162.045-.313-.072-.449-.195-.228-.603-.278-.845-.102-.026.019-.057.032-.107.061.009-.077.014-.125.021-.173.051-.37.061-.738-.04-1.103-.127-.454-.45-.715-.921-.701-.22.007-.45.044-.653.124-.855.335-1.512.928-2.071 1.642-.051.065-.118.124-.189.163-.723.401-1.449.797-2.174 1.195-.271.148-.542.297-.807.442-.216-.207-.413-.421-.637-.603-.682-.556-1.375-1.098-2.061-1.648-.608-.487-1.198-.995-1.649-1.64-.336-.48-.552-1.005-.572-1.599-.026-.756.188-1.447.573-2.091.493-.823 1.164-1.483 1.903-2.082.781-.633 1.626-1.17 2.502-1.66 1.225-.686 2.486-1.293 3.837-1.694 1.386-.411 2.791-.646 4.241-.482.57.064 1.123.195 1.632.474.389.213.708.492.857.929.146.43.142.865.04 1.301-.206.883-.69 1.612-1.299 2.263-.998 1.067-2.216 1.793-3.588 2.273-.791.277-1.605.451-2.441.521-.682.057-1.35-.003-1.996-.241-.428-.157-.8-.398-1.1-.747-.054-.063-.122-.13-.222-.072-.098.057-.115.151-.082.245.055.157.105.319.191.459.214.351.527.606.871.825.661.42 1.399.561 2.165.594 1.162.05 2.296-.123 3.413-.435 1.596-.445 2.983-1.231 4.096-2.471.927-1.032 1.588-2.198 1.73-3.605.069-.687-.004-1.36-.326-1.986-.349-.679-.903-1.147-1.566-1.494-.964-.506-2.006-.705-3.081-.763H14c-1.303.063-2.562.337-3.786.782-.926.337-1.835.717-2.717 1.157-1.921.96-3.71 2.108-5.179 3.699-.732.793-1.352 1.663-1.708 2.693-.104.302-.168.622-.243.934-.006.026.023.051-.041.077v.44c.064.113.071.225.1.338.189.733.578 1.363 1.06 1.937.687.818 1.518 1.476 2.38 2.096.747.537 1.505 1.062 2.255 1.595.129.091.248.197.388.309-.12.065-.221.122-.325.175-.99.502-1.942 1.065-2.82 1.747-.529.411-1.041.848-1.402 1.418-.581.918-.787 1.896-.354 2.94.127.305.32.569.592.763.088.063.187.126.29.15.264.062.534.103.802.152h.758c.839-.075 1.602-.362 2.291-.838 1.078-.744 1.804-1.741 2.117-3.022.227-.93.236-1.862-.031-2.788-.025-.086-.056-.17-.089-.253s-.071-.164-.116-.268c.572-.329 1.146-.659 1.719-.989.009.007.017.015.026.022-.031.102-.064.204-.093.308-.204.746-.34 1.505-.291 2.279.052.825.282 1.597.765 2.287.39.558 1.321.578 1.736.019.147-.199.29-.406.397-.628.28-.579.54-1.168.807-1.753.012-.025.022-.05.047-.107-.019.277-.042.52-.052.764-.016.38.006.758.136 1.12.111.31.3.541.655.581.242.028.436-.083.614-.224.279-.22.505-.491.673-.8.475-.873.963-1.74 1.394-2.635.466-.968.873-1.964 1.306-2.948.024-.054.045-.109.072-.175.102.402.174.795.305 1.168.152.432.341.854.547 1.264.097.194.086.32-.049.482-.564.68-1.118 1.368-1.673 2.056-.123.152-.245.306-.347.472-.062.101-.103.223-.12.341-.033.225.105.441.346.493.219.047.453.065.677.048.774-.057 1.477-.329 2.099-.789.805-.597 1.064-1.41.869-2.375-.053-.262-.146-.517-.237-.769-.041-.114-.043-.194.031-.3.644-.919 1.194-1.895 1.705-2.892.02-.039.041-.079.076-.121.166.863.415 1.694.862 2.448-.228.22-.454.419-.658.639-.45.483-.84 1.009-1.043 1.649-.087.276-.155.556-.116.852.061.458.436.755.886.651.963-.223 1.795-.677 2.403-1.481.409-.541.446-1.145.275-1.778-.047-.172-.103-.341-.163-.539.238-.074.47-.162.709-.217 1.245-.284 2.476-.234 3.675.215.7.262 1.266.702 1.601 1.393.41.845.183 1.646-.613 2.18-.074.05-.159.089-.221.151-.038.038-.06.115-.051.167.005.031.087.069.133.069.262-.002.474-.139.678-.28.511-.353.848-.829.928-1.454.002-.018-.024-.035.04-.052v-.416c-.064-.017-.037-.034-.039-.052zm-24.355 1.69c-.083 1.115-.588 2.019-1.414 2.75-.465.412-.997.705-1.618.808-.225.037-.455.046-.674-.047-.311-.133-.381-.409-.387-.704-.009-.469.155-.893.38-1.296.294-.526.725-.927 1.185-1.301.725-.59 1.512-1.09 2.317-1.561.013-.008.029-.012.061-.025.124.46.184.914.149 1.377zm6.29-4.845c-.059.356-.132.712-.236 1.057-.36 1.194-.821 2.352-1.32 3.493-.092.211-.226.404-.343.604-.018.031-.045.058-.071.084-.144.143-.282.135-.355-.052-.085-.217-.137-.449-.182-.679-.03-.154-.023-.316-.032-.474.01-1.123.352-2.145.934-3.095.24-.392.501-.765.899-1.014.123-.076.26-.137.399-.177.212-.06.343.039.308.252zm4.291 5.467c.514-.6 1.027-1.199 1.542-1.801.064.669-1.072 2.004-1.542 1.801zm4.926-1.211c-.109.062-.228.108-.34.165-.102.053-.136 0-.139-.088-.002-.06.007-.122.023-.18.208-.735.591-1.361 1.162-1.871.008-.008.021-.011.04-.021.271.758-.042 1.592-.747 1.995z" stroke="none" /></svg>
    },
    {
      name: 'GraphQL',
      path: <svg width=".6em" height="1em" aria-hidden="true" transform="scale(.9)" viewBox="0 0 256 288"><defs /><path fill="#4c4c4c" fillRule="evenodd" d="M152.576 32.963l59.146 34.15a25.819 25.819 0 015.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402 7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 01-6.831 2.72v68.325a25.7 25.7 0 016.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 01-6.34-5.147l-58.786 33.94a25.671 25.671 0 011.295 8.08c0 14.103-11.458 25.636-25.635 25.636-14.177 0-25.635-11.46-25.635-25.636 0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 01-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 016.758-2.703v-68.324a25.698 25.698 0 01-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 015.79 4.575l59.163-34.159a25.707 25.707 0 01-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635 0 2.548-.37 5.007-1.059 7.328zm-6.162 10.522l59.287 34.23a25.599 25.599 0 002.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684zm-36.123.7l-77.432 134.11a25.824 25.824 0 00-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 002.427-19.869l59.27-34.22c.239.247.483.49.732.727zm24.872 6.075l77.414 134.08a25.492 25.492 0 00-4.513 5.757 25.7 25.7 0 00-2.702 6.758H50.64a25.71 25.71 0 00-2.704-6.758 25.825 25.825 0 00-4.506-5.724l77.429-134.107A25.715 25.715 0 00128 51.27c2.487 0 4.89-.352 7.163-1.01zm11.795 194.478l58.902-34.008a25.865 25.865 0 01-.473-1.682H50.607c-.082.333-.171.663-.266.992l59.19 34.175A25.558 25.558 0 01128 236.373a25.564 25.564 0 0118.958 8.365z" /></svg>
    },
    {
      name: 'Scrum',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.649 21.349c0.064 0.004 0.133 0.012 0.202 0.012 0.977 0.001 1.955-0.005 2.932 0.005 0.214 0.002 0.278-0.071 0.267-0.276-0.014-0.267-0.003-0.535-0.003-0.865 1.109 0.816 2.181 1.604 3.281 2.414-1.092 0.804-2.164 1.593-3.281 2.416 0-0.311 0-0.568-0-0.825-0-0.332-0-0.333-0.323-0.333-6.247 0-12.495 0-18.742 0-0.302 0-0.302-0-0.302-0.304 0-0.659 0.009-1.318-0.005-1.976-0.005-0.214 0.064-0.262 0.269-0.261 3.359 0.006 6.718 0.011 10.077 0.002 1.722-0.005 3.081-0.718 3.98-2.202 1.622-2.68-0.069-6.19-3.177-6.642-2.4-0.349-4.631 1.262-5.038 3.703-0.043 0.254-0.046 0.515-0.071 0.821 0.393-0.053 0.749-0.102 1.152-0.156-0.631 1.22-1.24 2.398-1.858 3.592-0.947-0.976-1.88-1.937-2.792-2.877 0.229-0.038 0.533-0.082 0.834-0.145 0.057-0.012 0.141-0.104 0.139-0.157-0.017-0.639 0.027-1.271 0.152-1.898 0.004-0.019-0.005-0.041-0.011-0.078-0.61-0.104-1.176-0.324-1.689-0.678-1.254-0.868-1.91-2.483-1.602-3.955 0.335-1.604 1.545-2.803 3.109-3.099 1.014-0.191 1.954-0.009 2.827 0.527 0.154 0.095 0.248 0.109 0.349-0.056 0.059-0.097 0.148-0.175 0.25-0.293 0.127 0.512 0.246 0.991 0.364 1.47 0.040 0.161 0.071 0.325 0.118 0.484 0.051 0.172-0.001 0.249-0.183 0.237-0.526-0.036-1.053-0.068-1.579-0.103-0.13-0.009-0.259-0.023-0.426-0.039 0.13-0.164 0.248-0.311 0.377-0.472-0.284-0.216-0.597-0.324-0.923-0.377-1.576-0.258-2.965 0.953-2.933 2.548 0.024 1.224 1.056 2.318 2.275 2.422 0.158 0.013 0.213-0.067 0.274-0.185 0.864-1.658 2.165-2.83 3.935-3.44 4.095-1.412 8.37 1.118 9.159 5.259 0.389 2.039-0.054 3.901-1.291 5.57-0.034 0.046-0.065 0.095-0.095 0.144-0.006 0.009 0.002 0.027 0.007 0.065z"></path></svg>
    },
    {
      name: 'jQuery',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em"><path d="M16.232 24.047c-.15-.034-.295-.081-.441-.124-.037-.011-.074-.022-.11-.033-.143-.044-.284-.09-.425-.139-.019-.007-.039-.014-.058-.021-.126-.045-.251-.091-.375-.139-.035-.014-.07-.027-.105-.041-.136-.054-.271-.11-.405-.168l-.081-.036c-.115-.052-.228-.105-.341-.159-.033-.016-.065-.031-.099-.047-.089-.043-.177-.09-.264-.134-.059-.031-.118-.06-.176-.092-.107-.058-.212-.117-.317-.178-.035-.02-.071-.038-.107-.059-.139-.081-.277-.166-.412-.252-.037-.024-.074-.05-.111-.074-.099-.063-.197-.128-.293-.195-.032-.021-.063-.045-.094-.066-.093-.066-.186-.132-.277-.2-.042-.031-.082-.062-.123-.093-.084-.064-.168-.129-.25-.196-.037-.03-.075-.06-.112-.09-.105-.087-.209-.173-.312-.263-.011-.009-.023-.018-.034-.028-.111-.097-.22-.197-.328-.298-.031-.03-.062-.059-.092-.088-.08-.076-.158-.153-.235-.231-.031-.031-.062-.061-.092-.092-.098-.101-.194-.203-.289-.306-.005-.005-.01-.01-.014-.015-.1-.109-.197-.221-.293-.334-.026-.031-.051-.06-.077-.091-.071-.086-.142-.173-.211-.261-.026-.031-.052-.064-.077-.096-.083-.108-.164-.215-.243-.324-2.197-2.996-2.986-7.129-1.23-10.523l-1.556 1.974c-1.994 2.866-1.746 6.595-.223 9.64.036.073.074.145.112.217.024.045.046.092.071.137.014.027.03.053.044.079.026.049.053.095.079.142.047.083.096.166.145.249.027.045.055.091.083.136.055.089.111.176.169.264.024.037.047.075.072.111.08.118.161.236.244.353.002.003.005.006.007.009.013.018.028.037.041.056.072.1.147.199.223.296.028.036.056.072.084.107.067.085.136.169.206.253.026.031.052.063.079.094.094.11.189.22.287.328.002.002.004.004.006.005.004.005.008.008.011.013.095.104.193.206.291.307.031.032.062.063.093.094.076.077.154.153.233.228.032.03.063.061.095.091.105.099.211.196.319.291.002.001.003.003.005.004.018.016.038.032.056.047.095.082.192.164.29.245l.12.096c.08.064.16.127.241.189.043.033.086.066.129.098.089.066.18.131.271.194.033.024.065.047.099.07.009.006.018.013.027.019.086.06.175.116.263.174.038.025.075.051.114.076.136.086.273.171.412.253.038.022.076.043.114.064.102.059.205.117.309.174.056.03.114.059.171.088.073.038.147.078.221.115.017.009.035.017.051.025.03.014.06.028.091.044.116.055.233.11.351.163.025.011.049.022.074.033.135.059.271.116.409.17.033.014.066.026.1.039.127.049.256.098.386.143.016.006.032.012.049.017.142.05.286.096.43.141.034.01.069.021.104.031.147.044.293.097.445.125 9.643 1.759 12.444-5.795 12.444-5.795-2.352 3.065-6.528 3.873-10.485 2.974zm-3.474-7.816c.216.31.456.678.742.927.104.114.213.226.324.336.028.029.057.056.085.084.108.105.217.207.33.307.005.003.009.008.014.012l.003.003c.125.11.255.216.386.319.029.022.058.046.088.069.132.101.266.2.404.295l.012.009c.061.042.123.081.184.122.03.019.058.04.088.058.098.063.198.125.299.183.014.009.028.016.042.024.087.051.176.1.265.148.031.018.063.033.094.049.061.032.123.064.185.096.009.004.019.009.028.012.127.063.255.123.386.18.028.012.057.023.085.035.105.045.21.088.316.129.045.017.091.033.135.05.097.036.193.069.291.101.044.014.087.028.131.042.139.043.276.098.42.122 7.445 1.233 9.164-4.499 9.164-4.499-1.549 2.232-4.55 3.296-7.752 2.465-.142-.038-.282-.078-.422-.122-.043-.013-.084-.027-.127-.041-.099-.032-.197-.066-.295-.102-.045-.017-.089-.033-.133-.05-.107-.041-.213-.084-.317-.128-.029-.013-.058-.024-.086-.036-.131-.057-.261-.117-.389-.18-.066-.032-.13-.066-.195-.099-.037-.019-.075-.038-.112-.058-.083-.045-.165-.092-.246-.139-.019-.011-.04-.022-.059-.033-.101-.059-.2-.12-.299-.182-.03-.019-.06-.04-.09-.06-.065-.042-.13-.085-.193-.128-.137-.095-.271-.194-.402-.294-.03-.024-.061-.047-.091-.071-1.401-1.107-2.512-2.619-3.041-4.334-.554-1.778-.434-3.775.525-5.395L12.357 8.12c-1.442 2.075-1.364 4.853-.239 7.048.189.368.401.725.638 1.065zm7.848-2.567c.061.023.123.043.185.064.027.008.054.018.082.026.088.027.175.06.265.076 4.111.794 5.226-2.11 5.523-2.537-.977 1.406-2.618 1.744-4.632 1.255-.159-.039-.334-.096-.488-.151-.197-.07-.39-.15-.579-.24-.358-.172-.699-.38-1.015-.619-1.802-1.367-2.922-3.976-1.746-6.101l-.637.877c-.85 1.251-.933 2.805-.344 4.186.622 1.467 1.897 2.617 3.384 3.163z" stroke="none" /></svg>
    },
    {
      name: 'Figma',
      path: <svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
    },
    {
      name: 'Magento',
      path: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1 65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0l221.5 127.9zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6.1 255.9 94.9 54.9 95.1-54.9v-256l-63.4-36.6v255.9z"></path></svg>
    },
  ]

  return (
    <div className='used'>
      {techUsed.map((item, idx) =>
        <Fade duration={500} key={item.name}>
          <div className='used__card'>
            <span>{item.path}</span>
            <p>{item.name}</p>
          </div>
        </Fade>
      )}
    </div>
  )
}

export { Used }