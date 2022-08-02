import '../styles/global.css';

export function reportWebVitals(metric) {
    // console.log(metric);  // 性能分析数据
}

export default function App({ Component, pageProps }) {
    // use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...pageProps}></Component>);
}
