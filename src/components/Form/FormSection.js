import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading
} from "@chakra-ui/react"

const FormSection = ({ title, children }) => {
    return (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="center">
          <Heading as="h4" size="md">{title}</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
       {children}
    </AccordionPanel>
  </AccordionItem>
    );
}

export default FormSection;