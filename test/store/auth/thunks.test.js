
import { checkingCredentials } from "../../../src/store/auth/authSlice";
import { checkingAuthentication } from "../../../src/store/auth/thunks"

jest.mock("../../../src/firebase/provider");

describe('Pruebas en AuthThunks', () => { 

    const dispatch = jest.fn(); 

    beforeEach(()=> jest.clearAllMocks)
    

    test('debe de invocar el checkingCredentials', async() => {

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    })

})