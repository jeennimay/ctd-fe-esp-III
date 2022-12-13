import * as React from 'react';

import BodySingle from "dh-marvel/components/layouts/body/single/body-single";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqsData } from 'dh-marvel/components/faqs/faqsData';

export default function Faq() {
    return (
        <BodySingle title={"FAQ"}>
            <div>
                {
                    faqsData.map((f) => {
                        return (
                            <Accordion key={f.id}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{f.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {f.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </div>
        </BodySingle>
    )
}