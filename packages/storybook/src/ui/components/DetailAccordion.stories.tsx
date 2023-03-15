import {
  DetailAccordion,
  DetailAccordionButton,
  DetailAccordionHeader,
  DetailAccordionItem,
  DetailAccordionPanel,
  DetailAccordionRow,
} from "@argent/ui"
import { Meta } from "@storybook/react"

export default {
  title: "components/DetailAccordion",
} as Meta

const Inner = () => (
  <DetailAccordion>
    <DetailAccordionItem>
      {({ isDisabled, isExpanded }) => (
        <>
          <DetailAccordionButton
            isDisabled={isDisabled}
            isExpanded={isExpanded}
            label={"Label"}
            value={"Value"}
          />
          <DetailAccordionPanel isDisabled={isDisabled} isExpanded={isExpanded}>
            <DetailAccordionRow
              label={"Label 1"}
              value={"Value 1"}
              copyValue={"Copy value 1"}
            />
            <DetailAccordionRow
              label={"Label 2"}
              value={"Value 2"}
              copyValue={"Copy value 2"}
            />
            <DetailAccordionRow
              label={"Label 3"}
              value={"Value 3"}
              copyValue={"Copy value 3"}
            />
          </DetailAccordionPanel>
        </>
      )}
    </DetailAccordionItem>
    <DetailAccordionItem>
      {({ isDisabled, isExpanded }) => (
        <>
          <DetailAccordionButton
            isDisabled={isDisabled}
            isExpanded={isExpanded}
            label={"Label"}
            value={"Value"}
          />
          <DetailAccordionPanel isDisabled={isDisabled} isExpanded={isExpanded}>
            <DetailAccordionRow
              label={"Label 1"}
              value={"Value 1"}
              copyValue={"Copy value 1"}
            />
            <DetailAccordionRow
              label={"Label 2"}
              value={"Value 2"}
              copyValue={"Copy value 2"}
            />
            <DetailAccordionRow
              label={"Label 3"}
              value={"Value 3"}
              copyValue={"Copy value 3"}
            />
          </DetailAccordionPanel>
        </>
      )}
    </DetailAccordionItem>
    <DetailAccordionItem>
      {({ isDisabled, isExpanded }) => (
        <>
          <DetailAccordionButton
            isDisabled={isDisabled}
            isExpanded={isExpanded}
            label={"Label"}
            value={"Value"}
          />
          <DetailAccordionPanel isDisabled={isDisabled} isExpanded={isExpanded}>
            <DetailAccordionRow
              label={"Label 1"}
              value={"Value 1"}
              copyValue={"Copy value 1"}
            />
            <DetailAccordionRow
              label={"Label 2"}
              value={"Value 2"}
              copyValue={"Copy value 2"}
            />
            <DetailAccordionRow
              label={"Label 3"}
              value={"Value 3"}
              copyValue={"Copy value 3"}
            />
          </DetailAccordionPanel>
        </>
      )}
    </DetailAccordionItem>
  </DetailAccordion>
)

export const WithHeader = () => (
  <>
    <DetailAccordionHeader>Lorem ipsum dolor</DetailAccordionHeader>
    <Inner />
  </>
)

export const WithoutHeader = () => <Inner />
