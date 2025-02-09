import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slice/UserSlice";
import { MdDeleteForever } from "react-icons/md";

const DisplayUser = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users;
    });

    const deleteUser = (id) => {  
       dispatch(removeUser(id))
    };
    
    // console.log(data);

    return <Wrapper>
        {
            data.map((user, id) => {
                return <li key={id}>
                    {user}
                    <button className="btn-delete" onClick={() => deleteUser(id)}>
                        <MdDeleteForever className="delete-icon" />
                    </button>
                </li>
            })
        }
    </Wrapper>
}

const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    &:first-child{
        border-top: 1px solid #eee;
    }
  }  
`
export default DisplayUser;