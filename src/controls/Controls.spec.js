import React from 'react';
import { render, fireEvent,} from '@testing-library/react'
import * as rtl from '@testing-library/react';
import renderer from 'react-test-renderer';

import Controls from "./Controls";

describe("<Controls />", () => {
    it("defaults to unlocked and open", async () => {
        const wrapper = rtl.render(<Controls locked={false} closed={false}/>);
        let closebtn = wrapper.getByTestId('toggle-closed');
        let lockbtn = wrapper.getByTestId('toggle-locked');
        expect(closebtn).toBeDefined();
        expect(lockbtn).toBeDefined();
    })
    
    
})