import { Spin } from 'antd';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(
  import('react-quill'),
  {
    ssr: false,
    loading: () => <Spin />,
  }
);


function TextQuill(props) {
  return <QuillNoSSRWrapper {...props} />
}

export default TextQuill
