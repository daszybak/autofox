import { SVGAttributes } from 'react';
import DropDown from 'public/icons/dropdown.svg';
import IconWrapper from '../icon-wrapper/icon-wrapper.component';

interface DropdownIconProps extends React.SVGProps<SVGElement> {}

const DropdownIcon: React.FC<DropdownIconProps> = (props) => <IconWrapper style={props.style} Icon={<DropDown width={10} height={10} {...props} />} />;

export default DropdownIcon;
