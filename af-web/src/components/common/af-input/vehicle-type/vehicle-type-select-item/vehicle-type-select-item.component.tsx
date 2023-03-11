import { forwardRef } from 'react';
import IconWrapper from 'src/components/common/icon-wrapper/icon-wrapper.component';
import useStyles from './vehicle-type-select-item.styles';

interface VehicleTypeSelectItemProps extends React.ComponentPropsWithoutRef<'div'> {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const VehicleTypeSelectItem = forwardRef<HTMLDivElement, VehicleTypeSelectItemProps>(({ Icon, className, ...others }, ref) => {
	const { classes, cx } = useStyles();
	return (
		<div ref={ref} {...others} className={cx(className, classes.item)}>
			<IconWrapper Icon={<Icon fill="currentColor" color="currentColor" fontSize={'2rem'} />} />
		</div>
	);
});
VehicleTypeSelectItem.displayName = 'VehicleTypeSelectItem';

export default VehicleTypeSelectItem;
