import { } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAllUser } from "../store/slice/UserSlice";


const DeleteAllUser = () => {

const dispatch=useDispatch()



  return <Wrapper>
    <button className="clear-btn" onClick={()=>dispatch(deleteAllUser())}>
      clear users
    </button>
  </Wrapper>

};
const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background: linear-gradient(135deg, #7f6de3 0%, #11aaf1 100%);
    font-size: 1.8rem;
    color: #fff;
    letter-spacing: 0.3px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    outline:none;
    border:none;
    margin-top: 1.0rem;
    padding: 7px 13px;
  }
`
export default DeleteAllUser;