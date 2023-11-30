import React, { useState, useEffect } from 'react';
import '../../Components/Checkout/PhotoList.css';
const PhotoList = ({ itemArray }) => {
    return (
        <div className='parent_div'>
            <div>
                <img src={itemArray.image} className='photo_img_list'></img>
            </div>
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAACrq6vZ2dnp6en19fVvb28XFxd2dnZbW1shISEGBgbd3d2BgYHPz8+cnJzy8vKlpaXi4uI0NDSIiIi3t7d/f39UVFROTk7FxcXU1NQrKyuOjo5EREQlJSVJSUk9PT0QEBBnZ2eWlpa+vr6xsbEbGxuIzyeOAAAErUlEQVR4nO3daXeqMBAGYFCpS1UEcWndtfb//8SrXYUwSQhJBnrf9/OUk6cHWcZ4JgitpL9bJh2rydYjO0sLbBxkMI0CB+lmewuLsyC8zFzwPhJdn/mFh54z30cG3MKLW98tb7zChXPg7ePIKbx6ANYl1hJuvQBrnqh1hGtPwCDImIRjb8Kgxt2/hnDpDxgsWISOb4T5mN/5zYVDn8AgZhD6uBX+pscgdPc0Wpqjd+HcLzBYehc+eRZevAsnnoXG94vWCF/+vHAMIYQQVhbOxtWiesptmDBKDv2Kxzsdt1Jks4RXw2NmbRGaNwCPdGe5SULjJ8hbdm0Q1utvkidqc4RR1UtMIVTzpznCGh0V6XGbIzybHvBnRU0Xmh7vJ0Tv4A8JpxBWDIRkIDQOhFUDIRkIjQNh1UBIBkLjNEY48Cw03lRDrOi86Pbkob4gVfyZOsRxVQdO3yYnfeHW8/e7ttIpM5YIR13ulRpnttIRzp3shvUVsYkiCPtet8nYz1opfONeYs0I21KKQn+78VyluMuvKHzhXmDtzBRC7vVZyFoqXHEvz0JiqVD2DV5bkkiFCffyLOR/F1JvDG2KXOh7x6GLZFKh363NbjKSC2Pu9dXOaygX7lv9ZnHPUCFs/R1R+JZdfD/0u0PddsR2Tsk7fpuJJR25sj5Ne0/Usu1m5b22pJWtqEXpLxao/uZwEn/monGHHHfizqvWP6V7jRO9yrFm5dcy44za5qLu4Co7b5fNR937RLme5LPylCkr4/nnMZfKSuX6awvTh0cIol39Xbn5rZR3g3ralR6E+auz7DKsX5nmKju8wlnhIVDyo8t33cpok6+U/4tdCyeFYroLUqw8kJXbQqX8fcexMBKqX4lK8dd11IdWPKa0/+dYKN5hqacFcV+t/vZN6Wu5Y2Hx1AvDo3YldUKLP1LbMAqLbyoh2XAVd7dT3wA9CZX9RgmftYUjCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGUCHfalZxCcWIKNVulOAAoDIdEZSJUUv8LH8IXoZqa8jkVKi+1K30Ixb8m59CNipUpVbnRrvQhLI5DokYciZX0iKPiOKQn2QKcC4P8TD5q/s89+atSX1KZP+ZIPj7PuTB6nNU+kp1P0eGh8ll65q0eKk+SUW5ehEGw/KlcKYYVTgwq16oBiB6EwXh5H8e4P8unH96TDu5Xkc1Qo/LrmNKRa96E9wWNU81JydYrPQkZAyGEEPLHglB9aWeNBaH6lsSZVLl+tVD67sIe8f2tunDNjZBGfAevLjw1es76zoJQOmCaO+qPoY6QntPMH7H9YyJs8P1iprF6HeGRG0JmqV68ljBMuCVEuuqlawrJeeK8id7VK9cVnqRtFabkWkR1hWGf7IOyRROoK2zeiTqbay5cWxhuuU25FNvGNoThpjkPN9OVerkGwjCcx4r2rJekV81PoIHwlv0w63Dmctb9/H3nH1OJnnaVzqo5AAAAAElFTkSuQmCC"></img> */}
        </div>
    );
};

export default PhotoList;