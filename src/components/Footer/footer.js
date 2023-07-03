import React from 'react';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './footer.module.css';

const Footer = props => {
    const { links } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useFooter();

    const { copyrightText } = talonProps;

    return (
        <footer data-cy="Footer-root" className={classes.root}>
            Yo! My Foot. {copyrightText}
        </footer>
    );
};

export default Footer;

