export const ArrowDown = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`icon icon-tabler icon-tabler-arrow-badge-down-filled ${color}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z"
      strokeWidth="0"
      fill="currentColor"
    />
  </svg>
)

export const ArrowUp = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-big-up-lines-filled"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v2a1 1 0 0 0 1 1h6l.117 -.007a1 1 0 0 0 .883 -.993l-.001 -2h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M15 20a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M15 17a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
      strokeWidth="0"
      fill="currentColor"
    />
  </svg>
)

export const ArrowLeft = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-big-left-lines-filled"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h2a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-2 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M18 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    />
  </svg>
)

export const ArrowRight = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-big-right-lines-filled"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    />
  </svg>
)

export const IconMenu = ({ size = '20px', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color} height={size} width={size}>
      <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" />
    </svg>
  )
}

export const IconClose = ({ size = '20px', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 1024 1024" fill={color} height={size} width={size}>
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  )
}

export const JsIcon = ({ size = '20px', color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-javascript"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
    <path d="M7.5 8h3v8l-2 -1" />
    <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
  </svg>
)

export const ReactIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-react"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
    <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
    <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
    <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
    <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
    <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
    <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
  </svg>
)

export const TailwindIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-tailwind"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
  </svg>
)

export const NodeIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-nodejs"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
    <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
  </svg>
)

export const CssIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-css3"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
    <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
  </svg>
)

export const MysqlIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-mysql"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
    <path d="M9 7h.01" />
  </svg>
)

export const NextIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-nextjs"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
    <path d="M15 12v-3" />
  </svg>
)

export const GitIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-git"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12 15v-6" />
    <path d="M15 11l-2 -2" />
    <path d="M11 7l-1.9 -1.9" />
    <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
  </svg>
)

export const LinuxIcon = ({ size = '20px', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="0"
    height={size}
    width={size}
    {...props}
  >
    <path d="M15.534 8.411c0 .102-.102.102-.102.102h-.102c-.102 0-.102-.102-.204-.204 0 0-.102-.102-.102-.204s0-.102.102-.102l.204.102c.102.102.204.204.204.306zm-1.836-1.02c0-.51-.204-.816-.51-.816 0 0 0 .102-.102.102v.204h.306c0 .204.102.306.102.51h.204zm3.57-.51c.204 0 .306.204.408.51h.204c-.102-.102-.102-.204-.102-.306s0-.204-.102-.306-.204-.204-.306-.204c0 0-.102.102-.204.102 0 .102.102.102.102.204zm-3.06 1.632c-.102 0-.102 0-.102-.102s0-.204.102-.306a.447.447 0 00.306-.102c.102 0 .102.102.102.102 0 .102-.102.204-.306.408h-.102zm-1.122-.102c-.408-.204-.51-.51-.51-1.02 0-.306 0-.51.204-.714.102-.204.306-.306.51-.306s.306.102.51.306c.102.306.204.612.204.918v.204h.102v-.102c.102 0 .102-.204.102-.612 0-.306 0-.612-.204-.918s-.408-.51-.816-.51a.767.767 0 00-.714.51c-.204.408-.245.714-.245 1.224 0 .408.143.816.551 1.224.102-.102.204-.102.306-.204zm12.748 14.38c.102 0 .102-.041.102-.133 0-.224-.102-.489-.408-.785-.306-.306-.816-.5-1.428-.581-.102-.01-.204-.01-.204-.01-.102-.02-.102-.02-.204-.02a5.681 5.681 0 01-.408-.051 8.112 8.112 0 00.408-2.519c0-1.02-.204-1.734-.612-2.346s-.816-.918-1.326-1.02c-.102.102-.102.102-.102.204.51.204 1.02.612 1.326 1.224.306.714.408 1.326.408 2.04 0 .571-.102 1.418-.51 2.499-.408.163-.816.54-1.122 1.132 0 .092 0 .143.102.143 0 0 .102-.092.204-.265.204-.173.306-.347.51-.52.306-.173.51-.265.816-.265.51 0 1.02.071 1.326.214.408.133.612.275.714.439.102.153.204.296.306.428 0 .132.102.194.102.194zM16.452 8.003c-.102-.102-.102-.306-.102-.51 0-.408 0-.612.204-.918.204-.204.408-.306.612-.306.306 0 .51.204.714.408.102.306.204.51.204.816 0 .51-.204.816-.612.918 0 0 .102.102.204.102.204 0 .306.102.51.204.102-.612.204-1.02.204-1.53 0-.612-.102-1.02-.306-1.326-.306-.306-.612-.408-1.02-.408-.306 0-.612.102-.918.306-.204.306-.306.51-.306.816 0 .51.102.918.306 1.326.102 0 .204.102.306.102zm1.224 1.632c-1.326.918-2.346 1.326-3.162 1.326-.714 0-1.428-.306-2.04-.816.102.204.204.408.306.51l.612.612c.408.408.918.612 1.428.612.714 0 1.53-.408 2.55-1.122l.918-.612c.204-.204.408-.408.408-.714 0-.102 0-.204-.102-.204-.102-.204-.612-.51-1.632-.816-.918-.408-1.632-.612-2.04-.612-.306 0-.816.204-1.53.612-.612.408-1.02.816-1.02 1.224 0 0 .102.102.204.306.612.51 1.224.816 1.836.816.816 0 1.836-.408 3.162-1.428v.204c.102 0 .102.102.102.102zm2.345 20.601c.408.767 1.122 1.152 1.938 1.152.204 0 .408-.031.612-.092.204-.041.408-.112.51-.194.102-.071.204-.143.306-.224.204-.071.204-.122.306-.173l1.734-1.499c.408-.325.816-.61 1.326-.857.408-.245.816-.408 1.02-.5.306-.082.51-.204.714-.367.102-.153.204-.347.204-.592 0-.296-.204-.52-.408-.683s-.408-.275-.612-.347-.408-.235-.714-.51a2.747 2.747 0 01-.51-1.112l-.102-.591c-.102-.275-.102-.479-.204-.592 0-.031 0-.041-.102-.041s-.306.092-.408.265c-.204.173-.408.367-.612.571-.102.204-.408.387-.612.561-.306.173-.612.265-.816.265-.816 0-1.224-.224-1.53-.663-.204-.326-.306-.704-.408-1.132-.204-.173-.306-.265-.51-.265-.51 0-.714.53-.714 1.601v3.172c0 .092-.102.296-.102.612-.102.316-.102.675-.102 1.081l-.204 1.132v.017zm-14.788-.543c.948.139 2.04.435 3.274.888 1.234.449 1.989.683 2.264.683.714 0 1.306-.316 1.795-.927.102-.198.102-.43.102-.698 0-.964-.581-2.183-1.744-3.661l-.694-.928c-.143-.194-.316-.49-.54-.887a8.645 8.645 0 00-.561-.918c-.133-.235-.347-.469-.622-.704a2.092 2.092 0 00-.908-.469c-.428.082-.724.224-.867.418s-.224.408-.245.632c-.031.214-.092.357-.194.428-.102.061-.275.112-.51.163-.051 0-.143 0-.275.01h-.275c-.541 0-.908.061-1.101.163a1.497 1.497 0 00-.388.989c0 .163.041.439.122.826.082.377.122.683.122.897 0 .418-.122.836-.377 1.254-.255.439-.388.765-.388.997.102.396.775.674 2.009.837zm3.396-9.273c0-.704.184-1.479.561-2.397.367-.918.734-1.53 1.091-1.938-.02-.102-.071-.102-.153-.102l-.102-.102c-.296.306-.653 1.02-1.081 2.04-.428.918-.653 1.764-.653 2.387 0 .459.112.857.316 1.203.224.337.765.826 1.622 1.448l1.081.704c1.152 1 1.764 1.693 1.764 2.101 0 .214-.102.428-.408.663-.204.245-.479.367-.714.367-.02 0-.031.02-.031.071 0 .01.102.214.316.612.428.581 1.346.867 2.57.867 2.244 0 3.977-.918 5.303-2.754 0-.51 0-.826-.102-.959v-.377c0-.663.102-1.163.306-1.489s.408-.479.714-.479c.204 0 .408.071.612.224.102-.785.102-1.469.102-2.081 0-.928 0-1.693-.204-2.407a5.376 5.376 0 00-.51-1.53l-.612-.918c-.204-.306-.306-.612-.51-.918-.102-.408-.204-.714-.204-1.224-.306-.51-.51-1.02-.816-1.53-.204-.51-.408-1.02-.612-1.428l-.918.714c-1.02.714-1.836 1.02-2.55 1.02-.612 0-1.122-.102-1.428-.51l-.612-.51c0 .306-.102.714-.306 1.122l-.643 1.224c-.286.714-.438 1.122-.469 1.428-.041.204-.071.408-.092.408l-.765 1.53c-.826 1.53-1.244 2.947-1.244 4.12 0 .235.02.479.061.724-.459-.316-.683-.755-.683-1.326zm7.303 9.648c-1.326 0-2.346.18-3.06.535v-.031c-.51.612-1.081.928-1.877.928-.5 0-1.285-.194-2.346-.581-1.071-.367-2.019-.649-2.845-.834a6.337 6.337 0 00-.561-.105 20.908 20.908 0 01-.785-.14 5.904 5.904 0 01-.724-.209 1.808 1.808 0 01-.612-.313c-.141-.129-.21-.273-.21-.436s.035-.337.104-.523c.065-.112.137-.224.208-.326.071-.112.133-.214.173-.316.061-.092.102-.184.143-.286.041-.092.082-.184.102-.296.02-.102.041-.204.041-.306s-.041-.408-.122-.948c-.082-.53-.122-.867-.122-1.01 0-.449.102-.806.326-1.061s.439-.388.663-.388h1.173c.092 0 .235-.051.449-.173.071-.163.133-.296.173-.418.051-.122.071-.214.092-.255.02-.061.041-.122.061-.173a1.48 1.48 0 01.163-.235.616.616 0 01-.122-.398c0-.112 0-.214.02-.275 0-.367.173-.887.54-1.571l.357-.643c.296-.551.52-.959.683-1.367.173-.408.357-1.02.561-1.836.163-.714.551-1.428 1.163-2.142l.765-.918c.53-.612.877-1.122 1.071-1.53s.296-.918.296-1.326c0-.204-.051-.816-.163-1.836a30.27 30.27 0 01-.153-2.958c0-.714.061-1.224.194-1.734s.367-1.02.714-1.428c.306-.408.714-.816 1.326-1.02S15.117.88 15.933.88c.306 0 .612 0 .918.102.306 0 .714.102 1.224.306.408.204.816.408 1.122.714.408.306.714.816 1.02 1.326.204.612.408 1.224.51 2.04.102.51.102 1.02.204 1.734 0 .612.102 1.02.102 1.326.102.306.102.714.204 1.224.102.408.204.816.408 1.122.204.408.408.816.714 1.224.306.51.714 1.02 1.122 1.632.918 1.02 1.632 2.142 2.04 3.263.51 1.02.816 2.346.816 3.763a6.93 6.93 0 01-.306 2.05c.204 0 .306.082.408.224s.204.449.306.928l.102.755c.102.224.204.439.51.622.204.184.408.337.714.459.204.102.51.245.714.428.204.204.306.418.306.642 0 .347-.102.602-.306.785a1.6 1.6 0 01-.714.439c-.204.102-.612.306-1.224.594-.51.302-1.02.668-1.53 1.101l-1.02.868a5.67 5.67 0 01-1.122.857c-.306.184-.714.275-1.122.275l-.714-.082c-.816-.214-1.326-.622-1.632-1.244-1.632-.198-2.958-.296-3.774-.296z" />
  </svg>
)

export const DockerIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-docker"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z" />
    <path d="M5 10h3v3h-3z" />
    <path d="M8 10h3v3h-3z" />
    <path d="M11 10h3v3h-3z" />
    <path d="M8 7h3v3h-3z" />
    <path d="M11 7h3v3h-3z" />
    <path d="M11 4h3v3h-3z" />
    <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
    <path d="M10 16l0 .01" />
  </svg>
)

export const GithubIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-github"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
)

export const MongodbIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-mongodb"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3v19" />
    <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" />
  </svg>
)

export const SocketioIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-socket-io"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M11 11h1l3 -4z" />
    <path d="M12 13h1l-4 4z" />
  </svg>
)

export const SolidjsIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-solidjs"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 17.5c4.667 3 8 4.5 10 4.5c2.5 0 4 -1.5 4 -3.5s-1.5 -3.5 -4 -3.5c-2 0 -5.333 .833 -10 2.5z" />
    <path d="M5 13.5c4.667 -1.667 8 -2.5 10 -2.5c2.5 0 4 1.5 4 3.5c0 .738 -.204 1.408 -.588 1.96l-2.883 3.825" />
    <path d="M22 6.5c-4 -3 -8 -4.5 -10 -4.5c-2.04 0 -2.618 .463 -3.419 1.545" />
    <path d="M2 17.5l3 -4" />
    <path d="M22 6.5l-3 4" />
    <path d="M8.581 3.545l-2.953 3.711" />
    <path d="M7.416 12.662c-1.51 -.476 -2.416 -1.479 -2.416 -3.162c0 -2.5 1.5 -3.5 4 -3.5c1.688 0 5.087 1.068 8.198 3.204a114.76 114.76 0 0 1 1.802 1.296l-2.302 .785" />
  </svg>
)

export const TypescriptIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-typescript"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
    <path d="M9 12h4" />
    <path d="M11 12v6" />
    <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
  </svg>
)

// Social Media y mas
export const DiscordIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-discord"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
  </svg>
)

export const Facebook = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-facebook"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
  </svg>
)

export const GmailIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-gmail"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
    <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
    <path d="M16 4l-4 4l-4 -4" />
    <path d="M4 6.5l8 7.5l8 -7.5" />
  </svg>
)

export const InstagramIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-instagram"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M16.5 7.5l0 .01" />
  </svg>
)

export const LinkedinIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-linkedin"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
)

export const TwitterIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-x"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
)

export const TwitchIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-twitch"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
    <path d="M16 8l0 4" />
    <path d="M12 8l0 4" />
  </svg>
)

export const YoutubeIcon = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-youtube"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
    <path d="M10 9l5 3l-5 3z" />
  </svg>
)

export const Tiktok = ({ size = '20px', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-tiktok"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#000000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
  </svg>
)
