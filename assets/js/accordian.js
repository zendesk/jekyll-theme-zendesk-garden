const toggleAccordian = (elementId) => {
  const collapsedClassName = 'chrome:sidebar_item_collapsed'
  const expandedClassName = 'chrome:sidebar_item_expanded'
  const accordianCollapsedClassName = 'chrome:sidebar_item_accordian_collapsed'
  const accordianExpandedClassName = 'chrome:sidebar_item_accordian_expanded'
  const btnEl = document.getElementById(elementId)
  const accordian = document.getElementById(`${elementId}:accordian`)

  if (btnEl.classList.contains(expandedClassName)) {
    btnEl.classList.remove(expandedClassName)
    btnEl.classList.add(collapsedClassName)
    accordian?.classList?.remove(accordianExpandedClassName)
    accordian?.classList?.add(accordianCollapsedClassName)
  } else {
    btnEl.classList.remove(collapsedClassName)
    btnEl.classList.add(expandedClassName)
    accordian?.classList?.remove(accordianCollapsedClassName)
    accordian?.classList?.add(accordianExpandedClassName)
  }
}
