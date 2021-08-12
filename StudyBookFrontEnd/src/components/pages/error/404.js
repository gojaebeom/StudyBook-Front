import ErrorLayout from "../../layouts/errorLayout";
import Error404Img from "../../../images/404.svg";

function Error404Page(){
    return(
    <ErrorLayout
        imagePath={Error404Img}
        errorMessage="Not Found"
        errorType="404"
    />
    );
}
export default Error404Page;