// Lesson-specific functions

function initializeCurrentPage(pageType, partNumForPage, partDataForPage, allPartsDataForTitleStorage) {
    currentPartNumber = partNumForPage; 
    currentPartData = partDataForPage; 

    loadProgressData(); 

    console.log("Initializing page with:", {
        pageType,
        partNumForPage,
        partDataForPage,
        allPartsDataForTitleStorage
    });

    if (pageType === 'part') {
        if (!currentPartNumber || !currentPartData) {
            console.error("Part number or data missing for part page initialization.", {
                currentPartNumber,
                currentPartData
            });
            if (getElementByIdSafe('content-area')) getElementByIdSafe('content-area').innerHTML = "שגיאה קריטית בטעינת השיעור.";
            return;
        }
        initializePartProgressEntry(currentPartNumber, currentPartData.title);
        if (allPartsDataForTitleStorage) { 
            storeAllPartTitles(allPartsDataForTitleStorage);
        }

        initializePageElements(); 
        if (partTitleEl) partTitleEl.textContent = currentPartData.title; 
        else if (getElementByIdSafe('lesson-title')) getElementByIdSafe('lesson-title').textContent = currentPartData.title; 
        
        showSection('study'); 
    } else if (pageType === 'progress') {
        console.log("Progress page script part should handle its own display logic.");
    }

    if (!contentAreaEl) contentAreaEl = getElementByIdSafe('content-area');
    if (!progressBarEl) progressBarEl = getElementByIdSafe('progress-bar');
}

// Expose functions globally
window.initializeCurrentPage = initializeCurrentPage;
